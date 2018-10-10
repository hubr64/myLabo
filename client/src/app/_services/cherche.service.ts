import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import * as GlobalConfiguration from '../_helpers/global';

import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ChercheService {

  private chercheUrl: string = GlobalConfiguration.serverURL+"/search";

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add('ChercheService: ' + message);
  }

  getResultats(critere: string): Observable<any[]> {
    this.log('Get recherches from: ' + this.chercheUrl);
    return this.http.get<any[]>(this.chercheUrl+"/"+critere).pipe(
      tap(resultats => this.log(`Récupération des résultats de recherche`)),
      catchError(this.handleError('getResultats', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // log to console
      console.error(error);
      //Affichage du msg d'erreur
      this.log(`${operation} a échoué : ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
