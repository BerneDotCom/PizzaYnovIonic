import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Ingredient } from '../../models/ingredient';
import { IngredientService } from '../../providers/ingredient-service/ingredient-service';
/**
 * Generated class for the AddIngredientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-ingredient',
  templateUrl: 'add-ingredient.html',
})
export class AddIngredientPage {

  //Pizza which will be added
  ingredient: Ingredient;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public ingredientService: IngredientService) {
    this.ingredient = {name: "", price: 0, weight: ""};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddIngredientPage');
  }

  /**
  * Add a new ingredient to the APP
  **/
  addIngredient(ingredient: Ingredient)
  {
    this.ingredient = ingredient;
    console.log(this.ingredient);

    //Adding the new ingredient to App
    this.ingredientService.add(this.ingredient).then(data => {
      //Display a toast to confirm new pizza created
      let toast = this.toastCtrl.create({
        message: 'L\'ingrédient a bien été créé',
        duration: 3000
      });
      toast.present();
    });
  }
}
