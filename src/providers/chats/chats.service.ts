import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Channel} from "../../models/channel/channel.interface";
import {ChannelMessages} from "../../models/channel/channel-messages.interface";

/*
  Generated class for the ChatsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatsService {

  constructor(
    private database: AngularFireDatabase
  ) {

  }

  addChannel( channelName: String) {
    this.database.list(`/channel-names/`).push({name: channelName});
  }

  getChannelListRef(){
    return this.database.list(`channel-names`).valueChanges();
  }

  getChannelChatRef(channelKey: string) {
    return this.database.list(`channels/${channelKey}`).valueChanges();
  }

  async sendChannelChatMessage(channelName: string, message: ChannelMessages) {
     await this.database.list(`/channels/${channelName}`).push(message);
  }

}
