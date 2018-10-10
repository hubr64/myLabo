import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Objet }          from '../_models/objet';
import { MessageService } from './message.service';

import * as GlobalConfiguration from '../_helpers/global';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ObjetService {

  private objetsUrl: string = GlobalConfiguration.serverURL+"/objets";

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add('ObjetService: ' + message);
  }

  getObjets(filter = null): Observable<Objet[]> {

    let params = new URLSearchParams();
    for(let key in filter){
        params.set(key, filter[key])
    }

    return this.http.get<Objet[]>(this.objetsUrl+'?'+params.toString()).pipe(
      tap(objets => this.log(`Liste des objets`)),
      catchError(this.handleError('getObjets', []))
      );
  }
  getObjetsCount(filter = null): Observable<any> {

    let params = new URLSearchParams();
    for(let key in filter){
        params.set(key, filter[key])
    }
    const url = `${this.objetsUrl}/count`;
    return this.http.get<any>(url+'?'+params.toString()).pipe(
      tap(count => this.log(`Nombre d'objets`)),
      catchError(this.handleError('getObjetsCount', []))
      );
  }

  getObjetsAlert(): Observable<Objet[]> {
    const url = `${this.objetsUrl}/alert`;
    return this.http.get<Objet[]>(url).pipe(
      tap(objets => this.log(`Liste des objets en alerte`)),
      catchError(this.handleError('getObjets', []))
      );
  }

  getObjet(_id: string): Observable<Objet> {
    const url = `${this.objetsUrl}/${_id}`;
    return this.http.get<Objet>(url).pipe(
      tap(_ => this.log(`Récupération de l'objet _id=${_id}`)),
      catchError(this.handleError<Objet>(`getObjet _id=${_id}`))
    );
  }

  updateObjet (objet: Objet): Observable<any> {
    const url = `${this.objetsUrl}/${objet._id}`;
    return this.http.put(url, objet, httpOptions).pipe(
      tap(_ => this.log(`Mise à jour de l'objet _id=${objet._id}`)),
      catchError(this.handleError<any>('updateObjet'))
    );
  }


  addObjet (objet: Objet): Observable<Objet> {
    return this.http.post<Objet>(this.objetsUrl, objet, httpOptions).pipe(
      tap((objet: Objet) => this.log(`Ajout de l'objet _id=${objet._id}`)),
      catchError(this.handleError<Objet>('addObjet'))
    );
  }

  deleteObjet (objet: Objet | string): Observable<Objet> {
    const id = typeof objet === 'string' ? objet : objet._id;
    const url = `${this.objetsUrl}/${id}`;
    return this.http.delete<Objet>(url, httpOptions).pipe(
      tap(_ => this.log(`Suppression de l'objet _id=${id}`)),
      catchError(this.handleError<Objet>('deleteObjet'))
    );
  }

  importObjets (objets: Objet[]): Observable<Objet[]> {
    const url = `${this.objetsUrl}/import`;
    return this.http.post<Objet[]>(url, objets, httpOptions).pipe(
      tap((objets: Objet[]) => this.log(`Imports des objets`)),
      catchError(this.handleError<Objet[]>('importObjets'))
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
