import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute }               from '@angular/router';
import { Location }                     from '@angular/common';
import { Subscription }                 from 'rxjs';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';

import { Objet }            from '../_models/objet';
import { Marque }           from '../_models/marque';
import { Categorie }        from '../_models/categorie';
import { ObjetService }     from '../_services/objet.service';
import { MarqueService }    from '../_services/marque.service';
import { CategorieService } from '../_services/categorie.service';

import * as GlobalConfiguration from '../_helpers/global';

@Component({
  selector: 'app-objet-detail',
  templateUrl: './objet-detail.component.html',
  styleUrls: ['./objet-detail.component.css']
})
export class ObjetDetailComponent implements OnInit, OnDestroy {

  objetForm: FormGroup;

  objet: Objet;
  marques : Marque[];
  categories : Categorie[];
  private subscription: Subscription;
  fichesCount : number = 0 ;
  globalDangers = GlobalConfiguration.dangers;
  globalDangersByLogo : any[] = [];
  separatorKeysCodes = GlobalConfiguration.separatorKeysCodes;

  @ViewChild('dangerInput') dangerInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private objetService: ObjetService,
    private marqueService: MarqueService,
    private categorieService: CategorieService,
    private location: Location
  ) { }

  ngOnInit() {
    this.objetForm = new FormGroup({
      '_id': new FormControl(''),
      'designation': new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      'categorie': new FormControl('', [Validators.required]),
      'quantite': new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*')
      ]),
      'unite': new FormControl(''),
      'seuil_alerte': new FormControl('', Validators.pattern('[0-9]*')),
      'dangers': new FormControl(''),
      'dangers_chips': new FormControl([]),
      'localisation': new FormControl('', [Validators.required]),
      'commentaire': new FormControl(''),
      'marque': new FormControl(''),
      'reference': new FormControl(''),
      'prix': new FormControl('', Validators.pattern('([0-9]*[.])?[0-9]+'))
    });
    this.getObjet();
    this.getMarques();
    this.getCategories();
    for(let danger of this.globalDangers){
      this.globalDangersByLogo[danger.logo] = danger;
    }

  }

  get designation() { return this.objetForm.get('designation'); }
  get categorie() { return this.objetForm.get('categorie'); }
  get quantite() { return this.objetForm.get('quantite'); }
  get dangers() { return this.objetForm.get('dangers'); }
  get dangers_chips() { return this.objetForm.get('dangers_chips'); }
  get localisation() { return this.objetForm.get('localisation'); }
  get seuil_alerte() { return this.objetForm.get('seuil_alerte'); }
  get prix() { return this.objetForm.get('prix'); }
  get unite() { return this.objetForm.get('unite'); }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  getObjet(): void {
    const _id = this.route.snapshot.paramMap.get('_id');
    if(_id != 'new'){
      this.subscription = this.objetService.getObjet(_id).subscribe(objet => {
          this.objet = objet;
          this.objetForm.patchValue({
            _id: objet._id,
            designation: objet.designation,
            categorie: objet.categorie,
            quantite: objet.quantite,
            unite: objet.unite,
            seuil_alerte: objet.seuil_alerte,
            dangers: objet.dangers,
            localisation: objet.localisation,
            commentaire: objet.commentaire,
            reference: objet.reference,
            marque: objet.marque,
            prix: objet.prix
          });
      });
    }else{
      this.objetForm.patchValue({
          _id: "new",
          designation: "",
          categorie: null,
          quantite: null,
          unite: "",
          seuil_alerte: null,
          dangers: "",
          localisation: "",
          commentaire: "",
          reference: "",
          marque: null,
          prix: null
        });
    }
  }

  getMarques(): void {
    this.subscription = this.marqueService.getMarques().subscribe(marques => this.marques = marques);
  }
  compareMarques(m1: Marque, m2: Marque) {
      return m1 && m2 ? m1._id === m2._id : m1 === m2;
  }


  getCategories(): void {
    this.subscription = this.categorieService.getCategories().subscribe(categories => this.categories = categories);
  }
  compareCategories(c1: Categorie, c2: Categorie) {
      return c1 && c2 ? c1._id === c2._id : c1 === c2;
  }

  selectedDanger(event: MatAutocompleteSelectedEvent): void {
    var dangersArr = this.dangers.value==""?[]:this.dangers.value.split(",");
    var possibleValue = event.option.value;
    for(let danger of dangersArr){
      if(danger == event.option.value)possibleValue="";
    }
    if (possibleValue != "") {
      dangersArr.push(event.option.value);
      this.dangers.setValue(dangersArr.join(","));
    }
    this.dangerInput.nativeElement.value = '';
    this.dangers_chips.setValue(null);
    console.dir("selected",this.dangers);
  }
  addOnBlur(): void {

  }
  addDanger(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {

      var possibleValue = "";
      for(let danger of this.globalDangers){
        if(danger.titre == value.trim() || danger.logo == value.toLowerCase( ).trim() ){
          possibleValue = danger.logo;
        }
      }
      var dangersArr = this.dangers.value==""?[]:this.dangers.value.split(",");
      for(let danger of dangersArr){
        if(danger == possibleValue)possibleValue="";
      }

      if (possibleValue != "") {
        dangersArr.push(possibleValue);
        this.dangers.setValue(dangersArr.join(","));
      }
    }
    if (input) {
      input.value = '';
    }
    this.dangers_chips.setValue(null);
    console.dir("add",this.dangers);
  }
  removeDanger(danger: string): void {
    var dangersArr = this.dangers.value.split(",");
    const index = dangersArr.indexOf(danger);
    if (index >= 0) {
      dangersArr.splice(index, 1);
      this.dangers.setValue(dangersArr.join(","));
    }
    console.dir("delete",this.dangers);
  }

  save(): void {
    if(this.objetForm.get('_id').value != 'new'){
      this.subscription = this.objetService.updateObjet(this.objetForm.value).subscribe(() => this.goBack());
    }else{
      this.subscription = this.objetService.addObjet(this.objetForm.value).subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }

  onFicheCount(count: number) {
    this.fichesCount = count;
  }

}
