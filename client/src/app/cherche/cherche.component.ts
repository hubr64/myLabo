import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ChercheService }      from '../_services/cherche.service';

@Component({
  selector: 'app-cherche',
  templateUrl: './cherche.component.html',
  styleUrls: ['./cherche.component.css']
})
export class ChercheComponent implements OnInit, OnDestroy {

  criteres: string = "";
  resultats: any[] = [];
  private subscription: Subscription;

  constructor(
    private chercheService: ChercheService,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
      if(this.subscription){
        this.subscription.unsubscribe();
      }
  }

  onKey() {
      if(this.criteres!=""){
        this.subscription = this.chercheService.getResultats(this.criteres).subscribe(resultats => this.resultats = resultats);
      }else{
        this.resultats = [];
      }
  }

  clear(){
    this.criteres = "";
  }

}
