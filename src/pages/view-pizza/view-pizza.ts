import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Pizza } from '../../models/pizza';
import { Ingredient } from '../../models/ingredient';
import { PanierService } from '../../providers/panier-service/panier-service';
import { IngredientService } from '../../providers/ingredient-service/ingredient-service';

/**
 * Generated class for the ViewPizzaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-pizza',
  templateUrl: 'view-pizza.html',
})
export class ViewPizzaPage {

  pizza: Pizza;
  ingredients: [Ingredient];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public toastCtrl: ToastController, private panierService: PanierService, private ingredientService: IngredientService) {
    this.pizza = this.navParams.get('data');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPizzaPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  /**
  * Display a toast when a pizza is added to the basket
  */
    presentToast(pizza: Pizza) {
      let toast = this.toastCtrl.create({
        message: 'Votre pizza a bien été ajoutée à votre panier',
        duration: 3000
      });
      this.panierService.add(pizza);

      toast.present();
    }
}
