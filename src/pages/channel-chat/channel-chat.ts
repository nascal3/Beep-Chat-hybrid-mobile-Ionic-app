import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Channel} from "../../models/channel/channel.interface";
import {ChatsService} from "../../providers/chats/chats.service";
import {AngularFireList} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {ChannelMessages} from "../../models/channel/channel-messages.interface";

/**
 * Generated class for the ChannelChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {
  channel: Channel;
  channelName: String
  channelMessages: Observable<ChannelMessages[]>;

  constructor(
    private chat: ChatsService,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.channel = this.navParams.get('channel');
    this.channelMessages = this.chat.getChannelChatRef(this.channel.name)
    this.channelName = this.channel.name;
    // console.log(this.channel.name);
  }

  sendMessage(content: string) {
    let channelMessage: ChannelMessages = {
      content
    }

    this.chat.sendChannelChatMessage(this.channel.name, channelMessage)
  }

}
