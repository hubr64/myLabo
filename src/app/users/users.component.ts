import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription }      from 'rxjs';
import { MatSort,MatPaginator,MatTableDataSource,MatSnackBar } from '@angular/material';

import { User } from '../_models/user';
import { AuthenticationService } from '../_services/authentication.service';

import * as GlobalConfiguration from '../_helpers/global';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  users : User[];
  currentUser : User;
  userProfilAdmin = GlobalConfiguration.userProfilAdmin;
  userProfilUser = GlobalConfiguration.userProfilUser;
  userProfilRead = GlobalConfiguration.userProfilRead;

  isLoading:boolean = false;
  displayedColumns: string[] = ['id', 'nom','email','profil','actions'];
  dataSource: MatTableDataSource<User>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private authenticationService: AuthenticationService,
     public snackBar: MatSnackBar
  ) {
    this.currentUser = this.authenticationService.getCurrentUser();
  }

  ngOnInit() {
      this.isLoading = true;
      this.getUsers();
      this.currentUser = this.authenticationService.getCurrentUser();
      this.authenticationService.change.subscribe(isAuthenticate => {
        this.currentUser = this.authenticationService.getCurrentUser();
      });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  getUsers(): void {
    this.subscription = this.authenticationService.getUsers().subscribe(users => {
      this.users = users;
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      if(users.length == 0){
        this.snackBar.open('Aucun utilisateur enregistrée !', 'Compris');
      }
      this.isLoading = false;
    });
  }

  delete(user: User): void {
      this.users = this.users.filter(o => o !== user);
      this.dataSource.data = this.users;
      this.subscription = this.authenticationService.deleteUser(user).subscribe();
  }

  changeUserProfil(user: User, profil: string): void {
    user.profil = profil;
    this.subscription = this.authenticationService.updateUser(user).subscribe();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}