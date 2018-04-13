import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
              private camera: Camera,
              public storageProvider: StorageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    this.loadProfilePic();
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

  doLoadCamera() {
    console.log('Started the camera.');
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }    
  }

}
