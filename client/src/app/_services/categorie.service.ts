import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Categorie }      from '../_models/categorie';
import { MessageService } from './message.service';

import * as GlobalConfiguration from '../_helpers/global';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CategorieService {

  private categoriesUrl: string = GlobalConfiguration.serverURL+"/categories";

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add('CategorieService: ' + message);

  }

  getCategories(): Observable<Categorie[]> {
    this.log('Get catégories from: ' + this.categoriesUrl);
    return this.http.get<Categorie[]>(this.categoriesUrl).pipe(
      tap(categories => this.log(`Récupération des catégories`)),
      catchError(this.handleError('getCategories', [], 'Impossible de récupérer la liste des catégories !'))
      );
  }

  getCategorie(_id: string): Observable<Categorie> {
    const url = `${this.categoriesUrl}/${_id}`;
    return this.http.get<Categorie>(url).pipe(
      tap(_ => this.log(`Récupération de la catégorie _id=${_id}`)),
      catchError(this.handleError<Categorie>(`getCategorie _id=${_id}`))
    );
  }

  updateCategorie (categorie: Categorie): Observable<any> {
    const url = `${this.categoriesUrl}/${categorie._id}`;
    return this.http.put(url, categorie, httpOptions).pipe(
      tap(_ => this.log(`Mise à jour de la catégorie _id=${categorie._id}`)),
      catchError(this.handleError<any>('updateCategorie'))
    );
  }

  addCategorie (categorie: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(this.categoriesUrl, categorie, httpOptions).pipe(
      tap((categorie: Categorie) => this.log(`Ajout de la catégorie _id=${categorie._id}`)),
      catchError(this.handleError<Categorie>('addCategorie'))
    );
  }

  deleteCategorie (categorie: Categorie | string): Observable<Categorie> {
    const id = typeof categorie === 'string' ? categorie : categorie._id;
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.delete<Categorie>(url, httpOptions).pipe(
      tap(_ => this.log(`Suppression de la catégorie _id=${id}`)),
      catchError(this.handleError<Categorie>('deleteCategorie'))
    );
  }


 /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T, message?: string) {
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
