import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';

import * as GlobalConfiguration from '../_helpers/global';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        var currentUser = this.authenticationService.getCurrentUser();

        if (currentUser) {
            if(state.url.indexOf("users") >= 0){
                if(currentUser.profil != GlobalConfiguration.userProfilAdmin){
                    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
                    return false;
                }
            }
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}