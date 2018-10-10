import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router }       from '@angular/router';
import { Location }     from '@angular/common';
import { MatSort,MatPaginator,MatTableDataSource,MatSnackBar } from '@angular/material';

import { Categorie }             from '../_models/categorie';
import { User }                  from '../_models/user';
import { CategorieService }      from '../_services/categorie.service';
import { AuthenticationService } from '../_services/authentication.service';
import { ExportCsvService }      from '../_services/export-csv.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  categories : Categorie[];
  selectedCategorie: Categorie;
  private subscription: Subscription;
  private currentUser: User;

  isLoading:boolean = false;
  displayedColumns: string[] = ['icone', 'nom','actions'];
  dataSource: MatTableDataSource<Categorie>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
     private categorieService: CategorieService,
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
      this.getCategories();
      this.authenticationService.change.subscribe(isAuthenticate => {
        this.currentUser = this.authenticationService.getCurrentUser();
      });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  getCategories(): void {
    this.subscription = this.categorieService.getCategories().subscribe(categories => {
      this.categories = categories;
      this.dataSource = new MatTableDataSource(categories);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      if(categories.length == 0){
        this.snackBar.open('Aucune catégorie enregistrée !', 'Compris');
      }
      this.isLoading = false;
    });
  }

  edit(categorie: Categorie): void {
    this.router.navigate(['/categorie',  categorie._id]);
  }

  delete(categorie: Categorie): void {
      this.categories = this.categories.filter(c => c !== categorie);
      this.dataSource.data = this.categories;
      this.subscription = this.categorieService.deleteCategorie(categorie).subscribe();
  }

  add(): void {
    this.router.navigate(['/categorie/new']);
  }

  onSelect(categorie: Categorie): void {
    this.selectedCategorie = categorie;
  }

  export(): void {
    var jsonToCsv = [];
    for (let categorie of this.categories) {
      jsonToCsv.push({'Nom':categorie.nom,"Parent":categorie.parent?categorie.parent.nom:null});
    }
    this.exportCsvService.downloadFile(JSON.stringify(jsonToCsv),"categories");
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}