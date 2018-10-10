import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { Objet }             from '../_models/objet';
import { ObjetService }          from '../_services/objet.service';

@Component({
  selector: 'app-objets-navigateur',
  templateUrl: './objets-navigateur.component.html',
  styleUrls: ['./objets-navigateur.component.css']
})
export class ObjetsNavigateurComponent implements OnInit {

  private multi:boolean = false;
  public objets : Objet[];

  constructor(
    private objetService: ObjetService,
    public dialogRef: MatDialogRef<ObjetsNavigateurComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.multi = data.multi;
  }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
  onObjetSelect(objet: Objet): void {
    this.dialogRef.close(objet);
  }

}
