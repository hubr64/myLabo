import { Component, OnInit, OnDestroy } from '@angular/core';

import { MessageService } from '../_services/message.service';

import * as GlobalConfiguration from '../_helpers/global';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnDestroy {

  display: boolean = GlobalConfiguration.activeScreenDebugMessage; //ng.probe($0).componentInstance.display

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
