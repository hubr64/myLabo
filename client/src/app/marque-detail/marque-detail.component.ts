import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Marque }        from '../_models/marque';
import { MarqueService } from '../_services/marque.service';

@Component({
  selector: 'app-marque-detail',
  templateUrl: './marque-detail.component.html',
  styleUrls: ['./marque-detail.component.css']
})
export class MarqueDetailComponent implements OnInit, OnDestroy {

  marqueForm: FormGroup;

  @Input() marque: Marque;

  private subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private marqueService: MarqueService,
    private location: Location
  ) { }

  ngOnInit() {
    this.marqueForm = new FormGroup({
      '_id': new FormControl(''),
      'nom': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'telephone': new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*')
      ]),
      'mail': new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+')
      ]),
      'web': new FormControl('', [
        Validators.pattern('(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})')
      ]),
      'adresse': new FormControl(''),
      'commentaire': new FormControl('')
    });
    this.getMarque();
  }

  get nom() { return this.marqueForm.get('nom'); }
  get telephone() { return this.marqueForm.get('telephone'); }
  get mail() { return this.marqueForm.get('mail'); }
  get web() { return this.marqueForm.get('web'); }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  getMarque(): void {
    const _id = this.route.snapshot.paramMap.get('_id');
    if(_id != 'new'){
      this.subscription = this.marqueService.getMarque(_id).subscribe(marque => {
          this.marque = marque;
          this.marqueForm.patchValue({
            _id: marque._id,
            nom: marque.nom,
            telephone: marque.telephone,
            mail: marque.mail,
            web: marque.web,
            adresse: marque.adresse,
            commentaire: marque.commentaire
          });
        });
    }else{
      this.marqueForm.patchValue({
          _id: "new",
          nom: "",
          telephone: "",
          mail: "",
          web: null,
          adresse: null,
          commentaire: null
        });
    }
  }

  save(): void {
    if(this.marqueForm.get('_id').value != 'new'){
      this.subscription = this.marqueService.updateMarque(this.marqueForm.value).subscribe(() => this.goBack());
    }else{
      this.subscription = this.marqueService.addMarque(this.marqueForm.value).subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }

}
