import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MatSnackBar } from '@angular/material';

import { Objet }            from '../_models/objet';
import { Marque }           from '../_models/marque';
import { Categorie }        from '../_models/categorie';
import { ObjetService }     from '../_services/objet.service';
import { MarqueService }    from '../_services/marque.service';
import { CategorieService } from '../_services/categorie.service';
import { MessageService }   from '../_services/message.service';
import { AlertService }     from '../_services/alert.service';

import * as GlobalConfiguration from '../_helpers/global';

@Component({
  selector: 'app-objets-import',
  templateUrl: './objets-import.component.html',
  styleUrls: ['./objets-import.component.css']
})
export class ObjetsImportComponent implements OnInit, OnDestroy {

  private marques : Marque[];
  private categories : Categorie[];
  private subscription: Subscription;

  objets : Objet[];

  importObjets: Objet[] = [];
  importErrors: String[] = [];
  importString: String = "";
  importFileName: String = "Parcourir..."
  importPhase :number = 1;
  importProgress: number = 0;
  executeProgress: number = 0;

  step = 0;

  globalDangers = GlobalConfiguration.dangers;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor(
     private objetService: ObjetService,
     private marqueService: MarqueService,
     private categorieService: CategorieService,
     private messageService: MessageService,
     private alertService: AlertService,
     public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getObjets();
  }

  ngOnDestroy() {
      if(this.subscription){
        this.subscription.unsubscribe();
      }
  }

  getObjets(): void {
    this.subscription = this.objetService.getObjets().subscribe(objets => this.objets = objets);
  }

  updateFile(event) {
    var importFile   : File       = event.target.files[0];
    var importReader : FileReader = new FileReader();

    this.importFileName = importFile.name +" ("+importFile.size+" octets)"
    this.importPhase = 1;
    this.importProgress = 0;
    this.executeProgress = 0;
    this.importObjets = [];
    this.importErrors = [];
    this.importString = "";

    importReader.onloadend = e => {
      this.importString = importReader.result;
    }

    importReader.readAsText(importFile);
  }

  uploadFile() {

    if(this.importString == ""){
      this.snackBar.open("Vous devez d'abord choisir un fichier à importer !", 'Compris');
    }else{
      this.importPhase = 2;
      this.importProgress = 1;

      this.subscription = this.marqueService.getMarques().subscribe(marques => {
        this.marques = marques;

        this.categorieService.getCategories().subscribe(categories => {
          this.categories = categories;
          this.uploadObjets(this.importString);
        });
      });
    }
  }

  uploadObjets(result: String): void {

    this.importObjets = [];
    this.importErrors = [];

    var importObjects = result.split("\r\n");
    var importStartLine = 1; //First line is header
    var importFieldLength = 12;

    var designationPosition = 1;
    var categoriePosition = 2;
    var quantitePosition = 3;
    var unitePosition = 4;
    var seuilAlertePosition = 5;
    var dangersPosition = 6;
    var localisationPosition = 7;
    var commentairePosition = 8;
    var referencePosition = 9;
    var marquePosition = 10;
    var prixPosition = 11;

    for (var i = importStartLine; i < importObjects.length; i++) {

        var importObject = importObjects[i].split(";");

        if(importObject.length!=importFieldLength){
          this.importErrors.push("Ligne "+i+" : Pas assez de paramètres.");
          continue;
        }

        var re = /,/;
        importObject[quantitePosition] = importObject[quantitePosition].replace(re, ".");
        importObject[seuilAlertePosition] = importObject[seuilAlertePosition].replace(re, ".");
        importObject[prixPosition] = importObject[prixPosition].replace(re, ".");

        if(importObject[designationPosition] == ""){
          this.importErrors.push("Ligne "+i+" : La Désignation est obligatoire mais non fournie.");
          continue;
        }

        var objet: any = null;
        if(importObject[designationPosition] != ""){
          objet = this.objets.find(function (obj) { return obj.designation === importObject[designationPosition]; });
          if(objet){
            this.importErrors.push("Ligne "+i+" : La Désignation correspond déjà à un objet existant ("+objet.designation+").");
            continue;
          }
        }

        if(importObject[categoriePosition] == ""){
          this.importErrors.push("Ligne "+i+" : La Catégorie est obligatoire mais non fournie.");
          continue;
        }
        if(importObject[quantitePosition] == ""){
          this.importErrors.push("Ligne "+i+" : La Quantité est obligatoire mais non fournie.");
          continue;
        }
        if(isNaN(Number(importObject[quantitePosition]))){
          this.importErrors.push("Ligne "+i+" : La quantité ne représente pas un nombre ("+importObject[quantitePosition]+")");
          continue;
        }
        if(importObject[seuilAlertePosition] != "" && isNaN(Number(importObject[seuilAlertePosition]))){
          this.importErrors.push("Ligne "+i+" : Le seuil d'alerte est fixé mais ne représente pas un nombre ("+importObject[seuilAlertePosition]+").");
          continue;
        }
        if(importObject[prixPosition] != "" && isNaN(Number(importObject[prixPosition]))){
          this.importErrors.push("Ligne "+i+" : Le prix est fixé mais ne représente pas un nombre ("+importObject[prixPosition]+").");
          continue;
        }
        var marque: any = null;
        if(importObject[marquePosition] != "" ){
          marque = this.marques.find(function (obj) { return obj.nom === importObject[marquePosition]; });
          if(marque === undefined){
            this.importErrors.push("Ligne "+i+" : La marque n'existe pas ("+importObject[marquePosition]+").");
            continue;
          }
        }
        var categorie: any = null;
        if(importObject[categoriePosition] != "" ){
          categorie = this.categories.find(function (obj) { return obj.nom === importObject[categoriePosition]; });
          if(categorie === undefined){
            this.importErrors.push("Ligne "+i+" : La catégorie n'existe pas ("+importObject[categoriePosition]+").");
            continue;
          }
        }
        if(importObject[dangersPosition] != "" ){
          var dangersArr = importObject[dangersPosition].split(",");
          var dangerPb = false;
          for(let danger of dangersArr){
            var dangerItem = this.globalDangers.find(function (obj) { return obj.logo === danger; });
            if(dangerItem === undefined){
              dangerPb = true;
            }
          }
          if(dangerPb){
            this.importErrors.push("Ligne "+i+" : Les dangers sont mal définis ou n'existent pas ("+importObject[dangersPosition]+").");
            continue;
          }
        }else{
          importObject[dangersPosition] = null;
        }

        if(importObject[unitePosition] == ""){importObject[unitePosition] = null;}
        if(importObject[localisationPosition] == ""){importObject[localisationPosition] = null;}
        if(importObject[commentairePosition] == ""){importObject[commentairePosition] = null;}
        if(importObject[referencePosition] == ""){importObject[referencePosition] = null;}

        var tmpObjet : Objet = {
          _id: null,
          designation: importObject[designationPosition],
          categorie: categorie,
          quantite: Number(importObject[quantitePosition]),
          unite: importObject[unitePosition],
          seuil_alerte: Number(importObject[seuilAlertePosition]),
          dangers: importObject[dangersPosition],
          localisation: importObject[localisationPosition],
          commentaire: importObject[commentairePosition],
          reference: importObject[referencePosition],
          marque: marque,
          prix: Number(importObject[prixPosition])
        };

        this.importObjets.push(tmpObjet);
    }
    this.importString = "";
    this.importProgress = 2;

  }

  execute(): void {

    this.executeProgress = 1;

    this.subscription = this.objetService.importObjets(this.importObjets).subscribe(objets => {

      if(objets && (objets.length == this.importObjets.length) ) {
        this.executeProgress = 2;
        this.snackBar.open("L'import est maintenant terminé ("+objets.length+" objets importés)", 'Compris');
      }else{
        this.executeProgress = 3;
        this.snackBar.open("Un problème a eu lieu pendant l'importation...", 'Compris');
      }
    });

  }

}


