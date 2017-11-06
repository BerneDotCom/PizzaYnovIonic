import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { iPizza } from '../../models/pizza';

/**
 * Generated class for the AddImagePage page.
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
  // Définition des options pour la caméra
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  //Déclaration de la variable qui contiendra l'image sous forme de string
  base64Image:String;

  //Pizza which will be added
  pizza: iPizza;

  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera,private base64ToGallery: Base64ToGallery) {
    //Constructor
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddImagePage');
  }

  //Lancement de la caméra pour la capture d'une image
  runCamera(event){
    this.camera.getPicture(this.options).then((imageData) => {
     //Conversion de l'image en base64
     this.base64Image = 'data:image/jpeg;base64,' + imageData;

    //Sauvegarde de l'image dans la gallery de l'utilisateur
     this.base64ToGallery.base64ToGallery(imageData, { prefix: '_img' }).then(

       //Message de retour en cas de succes
       res => console.log('Image sauvegardée dans la gallerie ', res),

       //Message de retour en cas d'échec
       err => console.log('L\'image n\'a pas pu être sauvegardée ', err)
     );
    }, (err) => {
     // Handle error
    });
  }
}
