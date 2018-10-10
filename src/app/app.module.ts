import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatAutocompleteModule,MatChipsModule,MatTabsModule,MatDialogModule,MatDividerModule,MatToolbarModule,MatIconModule,MatMenuModule,MatInputModule,MatSelectModule,MatOptionModule,MatListModule,MatCardModule,MatGridListModule,MatTableModule,MatPaginatorModule,MatSortModule,MatSnackBarModule,MatProgressBarModule,MatBadgeModule,MatExpansionModule} from '@angular/material';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material';

import { ObjetService }          from './_services/objet.service';
import { MarqueService }         from './_services/marque.service';
import { MessageService }        from './_services/message.service';
import { CategorieService }      from './_services/categorie.service';
import { FicheService }          from './_services/fiche.service';
import { ChercheService }        from './_services/cherche.service';
import { AlertService }          from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { ExportCsvService }      from './_services/export-csv.service';

import { CategorieFilterPipe } from './_pipes/categorie-filter.pipe';
import { AuthGuard }           from './_helpers/auth.guard';
import { JwtInterceptor }      from './_helpers/jwt.interceptor';
import { ErrorInterceptor }      from './_helpers/error.interceptor';

import { AppComponent }             from './app.component';
import { AppRoutingModule }         from './app-routing.module';
import { MessagesComponent }        from './messages/messages.component';
import { AlertComponent }           from './alert/alert.component';
import { NavigateurComponent }      from './navigateur/navigateur.component';
import { ObjetsComponent }          from './objets/objets.component';
import { ObjetDetailComponent }     from './objet-detail/objet-detail.component';
import { ObjetsAlertComponent }     from './objets-alert/objets-alert.component';
import { ObjetsImportComponent }    from './objets-import/objets-import.component';
import { MarquesComponent }         from './marques/marques.component';
import { MarqueDetailComponent }    from './marque-detail/marque-detail.component';
import { CategoriesComponent }      from './categories/categories.component';
import { CategorieDetailComponent } from './categorie-detail/categorie-detail.component';
import { FichesComponent }          from './fiches/fiches.component';
import { FicheDetailComponent }     from './fiche-detail/fiche-detail.component';
import { ChercheComponent }         from './cherche/cherche.component';
import { LoginComponent }           from './login/login.component';
import { MyComponent }              from './my/my.component';
import { RegisterComponent }        from './register/register.component';
import { UsersComponent }           from './users/users.component';
import { HomeComponent }            from './home/home.component';
import { ObjetsNavigateurComponent } from './objets-navigateur/objets-navigateur.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjetsComponent,
    ObjetDetailComponent,
    MarquesComponent,
    MarqueDetailComponent,
    MessagesComponent,
    ObjetsAlertComponent,
    CategoriesComponent,
    CategorieDetailComponent,
    NavigateurComponent,
    CategorieFilterPipe,
    ChercheComponent,
    ObjetsImportComponent,
    FichesComponent,
    FicheDetailComponent,
    AlertComponent,
    LoginComponent,
    MyComponent,
    RegisterComponent,
    UsersComponent,
    HomeComponent,
    ObjetsNavigateurComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatExpansionModule,
    MatDividerModule,
    MatTabsModule,
    MatDialogModule,
    MatChipsModule,
    MatAutocompleteModule,
    AppRoutingModule
  ],
  providers: [
    ObjetService,
    MarqueService,
    MessageService,
    CategorieService,
    FicheService,
    ChercheService,
    AlertService,
    AuthenticationService,
    ExportCsvService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 5000}}
    ],
  bootstrap: [AppComponent],
  entryComponents: [ObjetsNavigateurComponent]
})
export class AppModule { }
