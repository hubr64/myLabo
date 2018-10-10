import { Component, OnInit } from '@angular/core';
import { Router }           from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User;

  constructor(
     public router: Router,
     private authenticationService: AuthenticationService
    ) {
    this.currentUser = this.authenticationService.getCurrentUser()
  }

  ngOnInit() {
    this.authenticationService.change.subscribe(isAuthenticate => {
      this.currentUser = this.authenticationService.getCurrentUser();
    });
  }

}
