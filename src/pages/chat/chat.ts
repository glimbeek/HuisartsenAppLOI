import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  key:string;
  profilePicture: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storageProvider: StorageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  loadProfilePic() {
    this.key = "profilepicture";

    this.storageProvider.getData(this.key).then((value) => {

        if (!value) {
          console.log('No profile picture in local storage.');
          this.profilePicture = "../../assets/imgs/patient-avatar.png";
        }
        else {
          console.log('Profile picture: ', value )
          this.profilePicture = value;
        }
    });
  }

}
