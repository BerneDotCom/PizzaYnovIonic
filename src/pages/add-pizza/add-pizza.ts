import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
/**
 * Generated class for the AddPizzaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-pizza',
  templateUrl: 'add-pizza.html',
})
export class AddPizzaPage {
  // Definition of camera options
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  //base64Img will contain the picture taken
  base64Image:String;

  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera,private base64ToGallery: Base64ToGallery) {
    //Constructor
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddImagePage');
  }


  //Function running the camera and saving the picture
  runCamera(event){
    this.camera.getPicture(this.options).then((imageData) => {
     //Convert picture to base64
     this.base64Image = 'data:image/jpeg;base64,' + imageData;

    //Saving the picture to the user gallery
     this.base64ToGallery.base64ToGallery(imageData, { prefix: '_img' }).then(

       //Return message in case of success
       res => console.log('Image sauvegardée dans la gallerie ', res),

       //Return message in case of failure
       err => console.log('L\'image n\'a pas pu être sauvegardée ', err)
     );
    }, (err) => {
     // Handle error
    });
  }
}
