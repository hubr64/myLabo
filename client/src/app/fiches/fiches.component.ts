import { Component, OnInit, OnDestroy, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router }            from '@angular/router';
import { Location }          from '@angular/common';

import { MatSort,MatPaginator,MatTableDataSource,MatSnackBar } from '@angular/material';

import { Fiche }                 from '../_models/fiche';
import { User }                  from '../_models/user';
import { Categorie }             from '../_models/categorie';
import { Objet }                 from '../_models/objet';
import { FicheService }          from '../_services/fiche.service';
import { MessageService }        from '../_services/message.service';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-fiches',
  templateUrl: './fiches.component.html',
  styleUrls: ['./fiches.component.css']
})
export class FichesComponent implements OnInit, OnDestroy {

  @Input() categorie: Categorie;
  @Input() objet: Objet;
  @Output() countFiche = new EventEmitter<number>();

  fiches : Fiche[];
  selectedFiche: Fiche;
  private subscription: Subscription;
  currentUser: User;

  standaloneList: boolean = true;

  isLoading:boolean = false;
  displayedColumns: string[] = ['icone','nom','objets_professeur','objets_eleve','actions'];
  dataSource: MatTableDataSource<Fiche>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
     private ficheService: FicheService,
     private messageService: MessageService,
     private authenticationService: AuthenticationService,
     private router: Router,
     private location: Location,
     public snackBar: MatSnackBar
  ) {
    this.currentUser = this.authenticationService.getCurrentUser();
  }

  ngOnInit() {
    this.isLoading = true;
    this.getFiches();
    this.authenticationService.change.subscribe(isAuthenticate => {
      this.currentUser = this.authenticationService.getCurrentUser();
    });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  getFiches(): void {

    let filter = {};
    if(this.categorie){
        filter['categorie'] = this.categorie._id;
    }
    if(this.objet){
        filter['objet'] = this.objet._id;
    }

    if(this.categorie || this.objet){
      this.standaloneList = false;
    }
    this.subscription = this.ficheService.getFiches(filter).subscribe(fiches => {
      this.fiches = fiches;
      this.dataSource = new MatTableDataSource(fiches);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      if(fiches.length == 0){
        this.snackBar.open("Aucune fiche n'est enregistrée pour cette sélection !", 'Compris');
      }
      this.isLoading = false;
      this.countFiche.emit(this.fiches.length);
    });

  }

  edit(fiche: Fiche): void {
    this.router.navigate(['/fiche',  fiche._id]);
  }

  delete(fiche: Fiche): void {
      this.fiches = this.fiches.filter(o => o !== fiche);
      this.dataSource.data = this.fiches;
      this.subscription = this.ficheService.deleteFiche(fiche).subscribe();
      this.countFiche.emit(this.fiches.length);
  }

  add(): void {
    this.router.navigate(['/fiche/new']);
  }

  onSelect(fiche: Fiche): void {
    this.selectedFiche = fiche;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
