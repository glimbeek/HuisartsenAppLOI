import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the ProfielPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profiel',
  templateUrl: 'profiel.html',
})
export class ProfielPage {

  key:string;
  value:any;
  profilePicture: any;
  userName: string;
  avatarSource: any;
  emailAddress: string;
  loginCode: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storageProvider: StorageProvider,
              private camera: Camera,
              public modalCtrl: ModalController) {

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfielPage');

    this.loadProfilePic();
    this.loadUsername();
    this.loadEmailAdress();
    this.loadLoginCode();

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

  loadUsername() {
    this.key = "name";

    this.storageProvider.getData(this.key).then((value) => {
      console.log('Username: ', value )

      this.userName = value;
    });
  }

  loadEmailAdress() {
    this.key = "email";

    this.storageProvider.getData(this.key).then((value) => {
      console.log('Emailadress: ', value )

      this.emailAddress = value;
    });
  }

  loadLoginCode() {
    this.key = "logincode";

    this.storageProvider.getData(this.key).then((value) => {
      console.log('Logincode:  ', value )

      this.loginCode = value;
    });
  }

  doProfilePicChange() {

    this.key = "profilepicture";

    console.log('Changed the profile pic!');

    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      cameraDirection: 1,
      allowEdit:true,
      targetWidth: 150,
      targetHeight: 150
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


  doBlur(event,data) {
    this.storageProvider.setData(event, data)
  }

}
