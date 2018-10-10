import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Fiche }          from '../_models/fiche';
import { Objet }          from '../_models/objet';
import { MessageService } from './message.service';

import * as GlobalConfiguration from '../_helpers/global';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FicheService {

  private fichesUrl: string = GlobalConfiguration.serverURL+"/fiches";

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add('FicheService: ' + message);
  }

  getFiches(filter = null): Observable<Fiche[]> {
    let params = new URLSearchParams();
    for(let key in filter){
        params.set(key, filter[key])
    }
    return this.http.get<Fiche[]>(this.fichesUrl+'?'+params.toString()).pipe(
      tap(fiches => this.log(`Liste des fiches`)),
      catchError(this.handleError('getFiches', []))
      );
  }

  getFiche(_id: string): Observable<Fiche> {
    const url = `${this.fichesUrl}/${_id}`;
    return this.http.get<Fiche>(url).pipe(
      tap(_ => this.log(`Récupération de la fiche _id=${_id}`)),
      catchError(this.handleError<Fiche>(`getFiche _id=${_id}`))
    );
  }

  updateFiche (fiche: Fiche): Observable<any> {
    const url = `${this.fichesUrl}/${fiche._id}`;
    return this.http.put(url, fiche, httpOptions).pipe(
      tap(_ => this.log(`Mise à jour de la fiche _id=${fiche._id}`)),
      catchError(this.handleError<any>('updateFiche'))
    );
  }

  addFiche (fiche: Fiche): Observable<Fiche> {
    return this.http.post<Fiche>(this.fichesUrl, fiche, httpOptions).pipe(
      tap((fiche: Fiche) => this.log(`Ajout de la fiche _id=${fiche._id}`)),
      catchError(this.handleError<Fiche>('addFiche'))
    );
  }

  deleteFiche (fiche: Fiche | string): Observable<Fiche> {
    const id = typeof fiche === 'string' ? fiche : fiche._id;
    const url = `${this.fichesUrl}/${id}`;
    return this.http.delete<Fiche>(url, httpOptions).pipe(
      tap(_ => this.log(`Suppression de la fiche _id=${id}`)),
      catchError(this.handleError<Fiche>('deleteFiche'))
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
