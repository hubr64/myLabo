import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router }            from '@angular/router';
import { Location }          from '@angular/common';
import { MatSort,MatPaginator,MatTableDataSource,MatSnackBar } from '@angular/material';

import { Marque }        from '../_models/marque';
import { User }          from '../_models/user';

import { MarqueService } from '../_services/marque.service';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-marques',
  templateUrl: './marques.component.html',
  styleUrls: ['./marques.component.css']
})
export class MarquesComponent implements OnInit, OnDestroy {

  marques : Marque[];
  selectedMarque: Marque;
  private subscription: Subscription;
  private currentUser: User;

  isLoading:boolean = false;
  displayedColumns: string[] = ['nom','telephone','mail','web','actions'];
  dataSource: MatTableDataSource<Marque>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
     private marqueService: MarqueService,
     private authenticationService: AuthenticationService,
     private router: Router,
     private location: Location,
     public snackBar: MatSnackBar
  ) {
    this.currentUser = this.authenticationService.getCurrentUser();
  }

  ngOnInit() {
      this.isLoading = true;
      this.getMarques();
      this.authenticationService.change.subscribe(isAuthenticate => {
        this.currentUser = this.authenticationService.getCurrentUser();
      });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  getMarques(): void {
    this.subscription = this.marqueService.getMarques().subscribe(marques => {
      this.marques = marques;
      this.dataSource = new MatTableDataSource(marques);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      if(marques.length == 0){
        this.snackBar.open('Aucune marque enregistrée !', 'Compris');
      }
      this.isLoading = false;
    });
  }

  edit(marque: Marque): void {
    this.router.navigate(['/marque',  marque._id]);
  }

  delete(marque: Marque): void {
      this.marques = this.marques.filter(m => m !== marque);
      this.dataSource.data = this.marques;
      this.subscription = this.marqueService.deleteMarque(marque).subscribe();
  }

  add(): void {
    this.router.navigate(['/marque/new']);
  }

  onSelect(marque: Marque): void {
    this.selectedMarque = marque;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
