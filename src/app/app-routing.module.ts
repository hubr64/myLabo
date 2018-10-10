import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ObjetsComponent }          from './objets/objets.component';
import { ObjetDetailComponent }     from './objet-detail/objet-detail.component';
import { ObjetsImportComponent }    from './objets-import/objets-import.component';
import { MarquesComponent }         from './marques/marques.component';
import { MarqueDetailComponent }    from './marque-detail/marque-detail.component';
import { CategoriesComponent }      from './categories/categories.component';
import { CategorieDetailComponent } from './categorie-detail/categorie-detail.component';
import { FichesComponent }          from './fiches/fiches.component';
import { FicheDetailComponent }     from './fiche-detail/fiche-detail.component';
import { NavigateurComponent }      from './navigateur/navigateur.component';
import { AuthGuard }                from './_helpers/auth.guard';
import { LoginComponent }           from './login/login.component';
import { RegisterComponent }        from './register/register.component';
import { UsersComponent }           from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/browse', pathMatch: 'full' },
  { path: 'objets',         component: ObjetsComponent,          canActivate: [AuthGuard] },
  { path: 'objets/import',  component: ObjetsImportComponent,    canActivate: [AuthGuard] },
  { path: 'objet/:_id',     component: ObjetDetailComponent,     canActivate: [AuthGuard] },
  { path: 'marques',        component: MarquesComponent,         canActivate: [AuthGuard] },
  { path: 'marque/:_id',    component: MarqueDetailComponent,    canActivate: [AuthGuard] },
  { path: 'categories',     component: CategoriesComponent,      canActivate: [AuthGuard] },
  { path: 'categorie/:_id', component: CategorieDetailComponent, canActivate: [AuthGuard] },
  { path: 'fiches',         component: FichesComponent,          canActivate: [AuthGuard] },
  { path: 'fiche/:_id',     component: FicheDetailComponent,     canActivate: [AuthGuard] },
  { path: 'browse',         component: NavigateurComponent,      canActivate: [AuthGuard] },
  { path: 'users',          component: UsersComponent,           canActivate: [AuthGuard] },
  { path: 'login',          component: LoginComponent },
  { path: 'register',       component: RegisterComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
