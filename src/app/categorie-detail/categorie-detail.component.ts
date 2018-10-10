import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Categorie }        from '../_models/categorie';
import { CategorieService } from '../_services/categorie.service';

@Component({
  selector: 'app-categorie-detail',
  templateUrl: './categorie-detail.component.html',
  styleUrls: ['./categorie-detail.component.css']
})
export class CategorieDetailComponent implements OnInit, OnDestroy {

  @Input() categorie: Categorie;

  categories : Categorie[];
  private subscription: Subscription;
  objetsCount : number = 0 ;
  fichesCount : number = 0 ;

  categorieForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private categorieService: CategorieService,
    private location: Location
  ) { }

  ngOnInit() {
    this.categorieForm = new FormGroup({
      '_id': new FormControl(''),
      'nom': new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      'parent': new FormControl('')
    });
    this.getCategories();
    this.getCategorie();
  }

  get nom() { return this.categorieForm.get('nom'); }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  getCategorie(): void {
    const _id = this.route.snapshot.paramMap.get('_id');
    if(_id != 'new'){
      this.subscription = this.categorieService.getCategorie(_id).subscribe(categorie => {
          this.categorie = categorie;
          this.categorieForm.patchValue({
            _id: categorie._id,
            nom: categorie.nom,
            parent: categorie.parent
          });
        });
    }else{
      this.categorieForm.patchValue({
          _id: "new",
          nom: "",
          parent: null
        });
    }
  }

  compareCategories(c1: Categorie, c2: Categorie) {
      return c1 && c2 ? c1._id === c2._id : c1 === c2;
  }

  getCategories(): void {
    this.subscription = this.categorieService.getCategories().subscribe(categories => this.categories = categories);
  }

  save(): void {
    if(this.categorieForm.get('_id').value != 'new'){
      this.subscription = this.categorieService.updateCategorie(this.categorieForm.value).subscribe(() => this.goBack());
    }else{
      this.subscription = this.categorieService.addCategorie(this.categorieForm.value).subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }

  onObjetCount(count: number) {
    this.objetsCount = count;
  }
  onFicheCount(count: number) {
    this.fichesCount = count;
  }


}
