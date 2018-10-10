import { Component, OnInit, OnDestroy, EventEmitter, Input, Output } from '@angular/core';
import { Router }           from '@angular/router';
import { Location }         from '@angular/common';
import { Subscription } from 'rxjs';

import { Objet }            from '../_models/objet';
import { Categorie }        from '../_models/categorie';
import { CategorieService } from '../_services/categorie.service';
import { ObjetService }     from '../_services/objet.service';
import { AlertService }     from '../_services/alert.service';

@Component({
  selector: 'app-navigateur',
  templateUrl: './navigateur.component.html',
  styleUrls: ['./navigateur.component.css']
})
export class NavigateurComponent implements OnInit, OnDestroy {

  @Input() reduceMode: boolean = false;

  categories : Categorie[];
  categoriesById : any[] = [];
  categoriesObjetCnt : number[] = [];
  objetsCount : number = 0 ;
  fichesCount : number = 0 ;

  selectedCategorieParent : Categorie = null;
  previousCategorie: Categorie = null;
  browsedCategories : Categorie[] = [];
  private subscription: Subscription;

  @Output() selectedObjet = new EventEmitter<Objet>();

  constructor(
     private categorieService: CategorieService,
     private objetService: ObjetService,
     private alertService: AlertService,
     private router: Router,
     private location: Location
  ) { }

  ngOnInit() {
      this.getCategories();
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  getCategories(): void {

    this.subscription = this.categorieService.getCategories().subscribe(categories => {
      this.categories = categories;

      for (let categorie of this.categories) {
        this.categoriesById[categorie._id] = categorie;
        this.categoriesObjetCnt[categorie._id] = 0;
      }
      for (let categorie of this.categories) {
        let filter = {};
        filter['categorie'] = categorie._id;
        this.subscription = this.objetService.getObjetsCount(filter).subscribe(objetsCnt => {
          this.categoriesObjetCnt[categorie._id] += objetsCnt.count;
          var catTmp = this.categoriesById[""+categorie.parent];
          while (catTmp != undefined){
            this.categoriesObjetCnt[catTmp._id] = this.categoriesObjetCnt[catTmp._id]  + objetsCnt.count;
            catTmp = this.categoriesById[""+catTmp.parent];
          }
        });
      }

    });
  }

  onSelect(categorie: Categorie): void {
    this.selectedCategorieParent = categorie;
    this.browsedCategories.push(categorie);
  }

  onSelectBack(categorie: Categorie, index: number): void {

    let tmpBrowsedCategories = this.browsedCategories;
    this.browsedCategories = [];
    for (var i=0; i<tmpBrowsedCategories.length; i++){
      if(i<=index){
        this.browsedCategories.push(tmpBrowsedCategories[i]);
      }
    }
    this.selectedCategorieParent = categorie;
  }

  onObjetSelect(objet: Objet) {
    this.selectedObjet.emit(objet);
  }

  onObjetCount(count: number) {
    this.objetsCount = count;
  }
  onFicheCount(count: number) {
    this.fichesCount = count;
  }

}
