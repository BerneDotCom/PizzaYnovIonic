import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Ingredient } from '../../models/ingredient';
import { IngredientService } from '../../providers/ingredient-service/ingredient-service';
import { PizzaService } from '../../providers/pizza-service/pizza-service';
import { Pizza } from '../../models/pizza';


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
  pizza: Pizza;
  ingredients: Ingredient[];
  ingredient_ids: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera, public PizzaService: PizzaService, public toastCtrl: ToastController, private ingredientService: IngredientService) {
    this.pizza = {name: "", desc: "", picture: "", price: 0, ingredient_ids: []};
  }

  //INIT
  ionViewDidLoad() {

    this.ingredientService.get().then(data => {
        this.ingredients = data;
    });
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
  addPizza(pizza: Pizza)
  {
    this.pizza = pizza;
    this.pizza.picture = this.base64Image;

    console.log("MES INGREDS :",this.ingredient_ids);
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
