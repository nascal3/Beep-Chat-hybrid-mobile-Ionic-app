import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ChatsService} from "../../providers/chats/chats.service";
import {Observable} from "rxjs/Observable";
import {Channel} from "../../models/channel/channel.interface";

/**
 * Generated class for the ChannelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  channelList: Observable<Channel[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private chat: ChatsService,
    private alertCtrl: AlertController
    ) {
  }

  ionViewWillLoad() {
    // get channels
    this.getChannels();
  }

  showAddChannelDialog() {
    this.alertCtrl.create({
      title: 'Channel Name',
      inputs: [{
        name: 'channelName'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },{
        text: 'Add',
        handler: data => {
          this.chat.addChannel(data.channelName)
        }
      }]
    }).present();
  }

  getChannels() {
    this.channelList = this.chat.getChannelListRef();
  }

}
