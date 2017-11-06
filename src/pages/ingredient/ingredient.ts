import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { IngredientService } from '../../providers/ingredient-service/ingredient-service';

/**
 * Generated class for the IngredientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ingredient',
  templateUrl: 'ingredient.html',
})
export class IngredientPage {

  ingredients: [{name:String, weight:String, price:Number}];
  constructor(public navCtrl: NavController, public navParams: NavParams, public IngredientService: IngredientService, public toastCtrl: ToastController) {
    //For testing, ingredients list
    this.ingredients = [{name: "Lardons", weight : "100 Gr", price: 10}, {name: "Pomme de terre ", weight : "300 Gr", price: 2}, {name: "Fromage", weight : "50 Gr", price: 1}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IngredientPage');
  }

 //Remove an ingredient from the App
  delete(ingredient : {name:String, weight:String, price:Number})
  {
    //When API is running
    // this.IngredientService.delete(ingredient.name).then(data => {
    //   this.ingredients = data
    // });

    //Display a toast to confirm the ingredient is deleted
    let toast = this.toastCtrl.create({
      message: 'Ingrédient supprimé',
      duration: 3000
    });
    toast.present();
  }
}
