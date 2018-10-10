import { Component, OnInit, OnDestroy, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subscription }      from 'rxjs';
import { Router }            from '@angular/router';
import { Location }          from '@angular/common';

import { MatSort,MatPaginator,MatTableDataSource,MatSnackBar } from '@angular/material';

import { Objet }                 from '../_models/objet';
import { User }                  from '../_models/user';
import { Marque }                from '../_models/marque';
import { Categorie }             from '../_models/categorie';
import { ObjetService }          from '../_services/objet.service';
import { MessageService }        from '../_services/message.service';
import { AuthenticationService } from '../_services/authentication.service';
import { ExportCsvService }      from '../_services/export-csv.service';

@Component({
  selector: 'app-objets',
  templateUrl: './objets.component.html',
  styleUrls: ['./objets.component.css']
})
export class ObjetsComponent implements OnInit, OnDestroy {

  @Input() marque: Marque;

  @Output() selectedObjet = new EventEmitter<Objet>();
  @Output() countObjet = new EventEmitter<number>();

  private _categorie: Categorie;
  private subscription: Subscription;
  currentUser: User;
  displayactions: boolean = false;

  @Input()
  set categorie(value: Categorie) {
     this._categorie = value;
     this.getObjets();
  }
  get categorie(): Categorie {
      return this._categorie;
  }

  objets : Objet[];
  standaloneList: boolean = true;

  isLoading:boolean = false;
  displayedColumns: string[] = ['icone','designation','quantite','dangers','localisation','marque','actions'];
  dataSource: MatTableDataSource<Objet>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
     private objetService: ObjetService,
     private messageService: MessageService,
     private authenticationService: AuthenticationService,
     private exportCsvService: ExportCsvService,
     private router: Router,
     private location: Location,
     public snackBar: MatSnackBar
  ) {
    this.currentUser = this.authenticationService.getCurrentUser();
  }

  ngOnInit() {
    this.isLoading = true;
    this.getObjets();
    this.authenticationService.change.subscribe(isAuthenticate => {
      this.currentUser = this.authenticationService.getCurrentUser();
    });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  getObjets(): void {

    let filter = {};
    if(this.marque){
        filter['marque'] = this.marque._id;
    }
    if(this.categorie){
        filter['categorie'] = this.categorie._id;
    }

    if(this.marque || this.categorie){
      this.standaloneList = false;
    }
    this.subscription = this.objetService.getObjets(filter).subscribe(objets => {
      this.objets = objets;
      this.dataSource = new MatTableDataSource(objets);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      if(objets.length == 0){
        this.snackBar.open("Aucun objet n'est enregistré pour cette sélection !", 'Compris');
      }
      this.isLoading = false;
      this.countObjet.emit(this.objets.length);
    });
  }

  edit(objet: Objet): void {
    this.router.navigate(['/objet',  objet._id]);
  }

  delete(objet: Objet): void {
      this.objets = this.objets.filter(o => o !== objet);
      this.dataSource.data = this.objets;
      this.subscription = this.objetService.deleteObjet(objet).subscribe();
      this.countObjet.emit(this.objets.length);
  }

  add(): void {
    this.router.navigate(['/objet/new']);
  }

  onSelect(objet: Objet): void {
    this.selectedObjet.emit(objet);
  }

  onUpdate(updated: boolean) {
    this.getObjets();
  }

  decreaseQuantite(objet: Objet, index: number): void {
    objet.quantite--;
    this.subscription = this.objetService.updateObjet(objet).subscribe(objet => this.objets[index] = objet);
  }
  changeQuantite(objet: Objet, index: number): void {
    this.subscription = this.objetService.updateObjet(objet).subscribe(objet => this.objets[index] = objet);
  }
  increaseQuantite(objet: Objet, index: number): void {
    objet.quantite++;
    this.subscription = this.objetService.updateObjet(objet).subscribe(objet => this.objets[index] = objet);
  }

  export(): void {

    var jsonToCsv = [];
    for (let objet of this.objets) {
      jsonToCsv.push({'Désignation':objet.designation,"Catégorie":objet.categorie.nom,"Quantité disponible":objet.quantite,"Unité":objet.unite,"Seuil d'alerte":objet.seuil_alerte,"Dangers":objet.dangers,"Localisation":objet.localisation,"Commentaire":objet.commentaire,"Référence":objet.reference,"Marque":objet.marque?objet.marque.nom:null,"Prix":objet.prix});
    }
    this.exportCsvService.downloadFile(JSON.stringify(jsonToCsv),"objets");
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}