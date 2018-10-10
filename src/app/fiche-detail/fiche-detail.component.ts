import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription }                        from 'rxjs';
import { ActivatedRoute }                      from '@angular/router';
import { Location }                            from '@angular/common';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';

import { Fiche }                     from '../_models/fiche';
import { Ficheobjet }                from '../_models/ficheobjet';
import { Categorie }                 from '../_models/categorie';
import { Objet }                     from '../_models/objet';
import { FicheService }              from '../_services/fiche.service';
import { CategorieService }          from '../_services/categorie.service';
import { ObjetService }              from '../_services/objet.service';
import { ObjetsNavigateurComponent } from '../objets-navigateur/objets-navigateur.component';

@Component({
  selector: 'app-fiche-detail',
  templateUrl: './fiche-detail.component.html',
  styleUrls: ['./fiche-detail.component.css']
})
export class FicheDetailComponent implements OnInit, OnDestroy {

  ficheForm: FormGroup;

  @Input() fiche: Fiche;

  private categories : Categorie[];
  private ajoutObjetProfesseur : boolean = false;
  private ajoutObjetEleve : boolean = false;
  private subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private ficheService: FicheService,
    private categorieService: CategorieService,
    private objetService: ObjetService,
    private location: Location,
    public dialog: MatDialog
  ) { }

  ngOnInit() {

    this.fiche = new Fiche();
    this.ficheForm = new FormGroup({
      '_id': new FormControl(''),
      'nom': new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      'description': new FormControl('', [
        Validators.required
      ]),
      'protocole': new FormControl('', [
        Validators.required
      ]),
      'categorie': new FormControl('', [
        Validators.required
      ])
    });
    this.getFiche();
    this.getCategories();
  }

  get nom() { return this.ficheForm.get('nom'); }
  get description() { return this.ficheForm.get('description'); }
  get protocole() { return this.ficheForm.get('protocole'); }
  get categorie() { return this.ficheForm.get('categorie'); }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  getFiche(): void {
    const _id = this.route.snapshot.paramMap.get('_id');
    if(_id != 'new'){
      this.subscription = this.ficheService.getFiche(_id).subscribe(fiche => {
          this.fiche = fiche;

          this.ficheForm.patchValue({
            _id: this.fiche._id,
            nom: this.fiche.nom,
            description: this.fiche.description,
            protocole: this.fiche.protocole,
            categorie: this.fiche.categorie
          });

          for (let ficheobjet of this.fiche.objets_professeur) {
              this.ficheForm.addControl("ficheobjet.professeur.quantite-"+ficheobjet._id,new FormControl(ficheobjet.quantite, [Validators.required]));
              this.ficheForm.addControl("ficheobjet.professeur.commentaire-"+ficheobjet._id,new FormControl(ficheobjet.commentaire));
          }
          for (let ficheobjet of this.fiche.objets_eleve) {
              this.ficheForm.addControl("ficheobjet.eleve.quantite-"+ficheobjet._id,new FormControl(ficheobjet.quantite, [Validators.required]));
              this.ficheForm.addControl("ficheobjet.eleve.commentaire-"+ficheobjet._id,new FormControl(ficheobjet.commentaire));
          }
      });
    }else{
      this.fiche = {
        _id: "new",
        nom: "",
        description: "",
        protocole: "",
        categorie: null,
        objets_professeur: [],
        objets_eleve: []
      };
      this.ficheForm.patchValue({
          _id: this.fiche._id,
          nom: this.fiche.nom,
          description: this.fiche.description,
          protocole: this.fiche.protocole,
          categorie: this.fiche.categorie
        });
    }
  }

  getCategories(): void {
    this.subscription = this.categorieService.getCategories().subscribe(categories => this.categories = categories);
  }
  compareCategories(c1: Categorie, c2: Categorie) {
      return c1 && c2 ? c1._id === c2._id : c1 === c2;
  }

  save(): void {

    Object.keys(this.ficheForm.controls).forEach(key => {

      if(key.substring(0,10) == "ficheobjet"){
        var ficheObjetKeyTmp = key.split("-");
        var ficheObjetKey = ficheObjetKeyTmp[0].split(".");

        if(ficheObjetKey[1] == "professeur"){

          for (let ficheObjetIndex in this.fiche.objets_professeur) {
            if(this.fiche.objets_professeur[ficheObjetIndex]["_id"] == ficheObjetKeyTmp[1]){
              this.fiche.objets_professeur[ficheObjetIndex][ficheObjetKey[2]] = this.ficheForm.controls[key].value;
            }
          }
        }
        if(ficheObjetKey[1] == "eleve"){
          for (let ficheObjetIndex in this.fiche.objets_eleve) {
            if(this.fiche.objets_eleve[ficheObjetIndex]["_id"] == ficheObjetKeyTmp[1]){
              this.fiche.objets_eleve[ficheObjetIndex][ficheObjetKey[2]] = this.ficheForm.controls[key].value;
            }
          }
        }
      }else{
        this.fiche[key] = this.ficheForm.get(key).value;
      }

    });

    if(this.fiche._id != 'new'){
      this.subscription = this.ficheService.updateFiche(this.fiche).subscribe(() => this.goBack());
    }else{
      this.subscription = this.ficheService.addFiche(this.fiche).subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }

  ajouterObjet(type: String): void{

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.data = {multi: false};

    const dialogRef = this.dialog.open(ObjetsNavigateurComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        if(this.fiche.objets_professeur == null){this.fiche.objets_professeur = [];}
        if(this.fiche.objets_eleve == null){this.fiche.objets_eleve = [];}

        var ficheobjet : Ficheobjet = {
          _id: "new"+(this.fiche.objets_professeur.length+this.fiche.objets_eleve.length),
          quantite:null,
          objet:result,
          commentaire:null
        };

        if(type == 'professeur'){
          this.fiche.objets_professeur.push(ficheobjet);
        }
        if(type == 'eleve'){
          this.fiche.objets_eleve.push(ficheobjet);
        }

        this.ficheForm.addControl("ficheobjet."+type+".quantite-"+ficheobjet._id,new FormControl(ficheobjet.quantite, [Validators.required]));
        this.ficheForm.addControl("ficheobjet."+type+".commentaire-"+ficheobjet._id,new FormControl(ficheobjet.commentaire));
      }
    });
  }


  retirerObjet(type: String, ficheobjet: Ficheobjet): void{
    if(type == 'professeur'){
      this.fiche.objets_professeur = this.fiche.objets_professeur.filter(fo => fo !== ficheobjet);
    }
    if(type == 'eleve'){
      this.fiche.objets_eleve = this.fiche.objets_eleve.filter(fo => fo !== ficheobjet);
    }
    this.ficheForm.removeControl("ficheobjet."+type+".quantite-"+ficheobjet._id);
  }

  trackByFicheobjet(index: number, ficheobjet: Ficheobjet): string { return ficheobjet._id; }

}