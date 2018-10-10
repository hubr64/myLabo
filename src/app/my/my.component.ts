import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../_services/authentication.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  currentUser: User;

  constructor(private authenticationService: AuthenticationService) {
    this.currentUser = this.authenticationService.getCurrentUser();
  }

  ngOnInit() {
    this.authenticationService.change.subscribe(isAuthenticate => {
      this.currentUser = this.authenticationService.getCurrentUser();
    });
  }

  logout(){
    this.authenticationService.logout();

  }


}
