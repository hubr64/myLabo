import { Injectable } from '@angular/core';

import * as GlobalConfiguration from '../_helpers/global';

@Injectable()
export class MessageService {

  messages: any[] = [];
  display: boolean = GlobalConfiguration.activeScreenDebugMessage;

  add(message: string) {
    this.messages.unshift({time:Date.now(),message:message});
    if(!this.display){
      console.log({time:Date.now(),message:message});
    }
  }

  clear() {
    this.messages = [];
  }

}
