import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the CameraModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera-modal',
  templateUrl: 'camera-modal.html',
})
export class CameraModalPage {

  key: any;
  profilePicture: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storageProvider: StorageProvider,
              private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  doTakePhoto() {
    this.key = "profilepicture";

    console.log('Changed the profile pic!');

    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.profilePicture = 'data:image/jpeg;base64,' + imageData;
     this.storageProvider.setData(this.key, this.profilePicture)
    }, (err) => {
     // Handle error
    });
  }

  doGetImage() {
    this.key = "profilepicture";

    console.log('Changed the profile pic!');

    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.profilePicture = 'data:image/jpeg;base64,' + imageData;
     this.storageProvider.setData(this.key, this.profilePicture)
    }, (err) => {
     // Handle error
    });
  }

}
