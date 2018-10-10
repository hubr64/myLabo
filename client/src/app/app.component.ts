import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'myLabo';
  localUser: any;


  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer){

      this.localUser = JSON.parse(localStorage.getItem('currentUser'));
      this.matIconRegistry.addSvgIcon("ml-logo",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/myLabo.svg"));
      this.matIconRegistry.addSvgIcon("ml-professeur",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/professeur.svg"));
      this.matIconRegistry.addSvgIcon("ml-eleve",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eleve.svg"));
  }

}
