import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { iIngredient } from '../../models/ingredient';
import { PizzaService } from '../../providers/pizza-service/pizza-service';


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
  base64Image:string;

  //Pizza which will be added
  pizza =  {name: "", desc: "", picture: "", price: 0, ingredient_ids: Array()};
  ingredients: iIngredient[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera, public PizzaService: PizzaService, public toastCtrl: ToastController) {
    //Constructor

    //For testing, ingredients list
    this.ingredients = [{name: "Lardons", weight : "100 Gr", price: 10}, {name: "Pomme de terre ", weight : "300 Gr", price: 2}, {name: "Fromage", weight : "50 Gr", price: 1}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddImagePage');
  }

  //Lancement de la caméra pour la capture d'une image
  runCamera(event){
    this.camera.getPicture(this.options).then((imageData) => {
     //Conversion de l'image en base64
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  /**
  * Add a new pizza to APP
  */
  addPizza(pizza: {name: "", desc: "", picture: "", price: 0, ingredient_ids: Array<iIngredient>})
  {
    this.pizza = pizza;
    this.pizza.picture = this.base64Image;

    //TODO : Add ingredient_ids

    //Adding the new pizza to App
    // this.PizzaService.add(this.pizza).then(data => {
    // });

    //Display a toast to confirm new pizza created
    let toast = this.toastCtrl.create({
      message: 'Votre pizza a bien été créée',
      duration: 3000
    });
    toast.present();
  }
}
