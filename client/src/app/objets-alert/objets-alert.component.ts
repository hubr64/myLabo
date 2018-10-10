import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription  } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

import { Objet }                 from '../_models/objet';
import { User  }                 from '../_models/user';
import { ObjetService }          from '../_services/objet.service';
import { AuthenticationService } from '../_services/authentication.service';

import * as GlobalConfiguration from '../_helpers/global';

@Component({
  selector: 'app-objets-alert',
  templateUrl: './objets-alert.component.html',
  styleUrls: ['./objets-alert.component.css']
})
export class ObjetsAlertComponent implements OnInit, OnDestroy {

  objets : Objet[] = [];
  display : boolean = false;
  private subscription: Subscription;
  currentUser: User;

  constructor(
     private objetService: ObjetService,
     private authenticationService: AuthenticationService
   ) {
    this.currentUser = this.authenticationService.getCurrentUser();
  }

  ngOnInit() {
      this.getObjets();
       this.authenticationService.change.subscribe(isAuthenticate => {
        this.currentUser = this.authenticationService.getCurrentUser();
      });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  getObjets(): void {
    this.subscription = this.objetService.getObjetsAlert().subscribe(objets => this.objets = objets);

      this.subscription = Observable.interval(GlobalConfiguration.requestRefreshTimer).subscribe(x => {
        this.getObjets();
      });
  }

  toggleAlerts(){
    this.display = !this.display;
  }

}
