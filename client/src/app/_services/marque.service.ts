import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Marque }         from '../_models/marque';
import { MessageService } from './message.service';

import * as GlobalConfiguration from '../_helpers/global';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MarqueService {

  private marquesUrl: string = GlobalConfiguration.serverURL+"/marques";

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add('MarqueService: ' + message);
  }

  getMarques(): Observable<Marque[]> {
    this.log('Get fournisseurs from: ' + this.marquesUrl);
    return this.http.get<Marque[]>(this.marquesUrl).pipe(
      tap(marques => this.log(`Récupération des fournisseurs`)),
      catchError(this.handleError('getMarques', []))
      );
  }

  getMarque(_id: string): Observable<Marque> {
    const url = `${this.marquesUrl}/${_id}`;
    return this.http.get<Marque>(url).pipe(
      tap(_ => this.log(`Récupération du fournisseur _id=${_id}`)),
      catchError(this.handleError<Marque>(`getMarque _id=${_id}`))
    );
  }

  updateMarque (marque: Marque): Observable<any> {
    const url = `${this.marquesUrl}/${marque._id}`;
    return this.http.put(url, marque, httpOptions).pipe(
      tap(_ => this.log(`Mise à jour du fournisseur _id=${marque._id}`)),
      catchError(this.handleError<any>('updateMarque'))
    );
  }


  addMarque (marque: Marque): Observable<Marque> {
    return this.http.post<Marque>(this.marquesUrl, marque, httpOptions).pipe(
      tap((marque: Marque) => this.log(`Ajout du fournisseur _id=${marque._id}`)),
      catchError(this.handleError<Marque>('addMarque'))
    );
  }

  deleteMarque (marque: Marque | string): Observable<Marque> {
    const id = typeof marque === 'string' ? marque : marque._id;
    const url = `${this.marquesUrl}/${id}`;
    return this.http.delete<Marque>(url, httpOptions).pipe(
      tap(_ => this.log(`Suppression du fournisseur _id=${id}`)),
      catchError(this.handleError<Marque>('deleteMarque'))
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
      this.log(`${operation} a échoué : ${error.error}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
