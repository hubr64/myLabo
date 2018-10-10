import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap }        from 'rxjs/operators';

import * as GlobalConfiguration from '../_helpers/global';

import { MessageService } from './message.service';
import { User } from '../_models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthenticationService {

    private userUrl: string = GlobalConfiguration.serverURL+"/users";
    isAuthenticate = false;

    @Output() change: EventEmitter<boolean> = new EventEmitter();

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) {
      var localUser = JSON.parse(localStorage.getItem('currentUser'));
      if(localUser){
          this.isAuthenticate = true;
          this.change.emit(this.isAuthenticate);
      }
    }

    private log(message: string) {
      this.messageService.add('AuthenticationService: ' + message);
    }

    register(user: User) {
        const url = `${this.userUrl}/register`;
        return this.http.post(url, user);
    }

    login(email: string, password: string) {
        const url = `${this.userUrl}/authenticate`;
        return this.http.post<any>(url, { email: email, password: password })
            .pipe(
                map(user => {
                    // login successful if there's a jwt token in the response
                    if (user && user.user && user.token) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify(user));
                        this.isAuthenticate = !this.isAuthenticate;
                        this.change.emit(this.isAuthenticate);
                    }
                    return user;
                })
            );
    }

    getCurrentUser(){
        var localUser = JSON.parse(localStorage.getItem('currentUser'));
        if(localUser)
            return localUser.user;
        else
            return undefined
    }

    getCurrentToken(){
        var localUser = JSON.parse(localStorage.getItem('currentUser'));
        if(localUser)
            return localUser.token;
        else
            return undefined
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.isAuthenticate = !this.isAuthenticate;
        this.change.emit(this.isAuthenticate);
    }

    getUsers(): Observable<User[]> {

        return this.http.get<User[]>(this.userUrl).pipe(
          tap(users => this.log(`Liste des utilisateurs`))
      );
    }

    updateUser (user: User): Observable<any> {
        const url = `${this.userUrl}/${user._id}`;
        return this.http.put(url, user, httpOptions).pipe(
            tap(_ => this.log(`Mise à jour de l'utilisateur _id=${user._id}`))
        );
    }

    deleteUser (user: User | string): Observable<User> {
        const id = typeof user === 'string' ? user : user._id;
        const url = `${this.userUrl}/${id}`;
        return this.http.delete<User>(url, httpOptions).pipe(
            tap(_ => this.log(`Suppression de l'utilisateur _id=${id}`))
        );
    }

}