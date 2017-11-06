import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
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

  pizza;
  ingredients;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public toastCtrl: ToastController) {
    this.pizza = this.navParams.get('data');

    //For testing, ingredients list
    this.ingredients = [{name: "Lardons", weight : "100 Gr", price: "10 €"}, {name: "Pomme de terre ", weight : "300 Gr", price: "2 €"}, {name: "Fromage", weight : "50 Gr", price: "1 €"}];
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
    presentToast() {
      let toast = this.toastCtrl.create({
        message: 'Votre pizza a bien été ajoutée à votre panier',
        duration: 3000
      });
      toast.present();
    }
}
