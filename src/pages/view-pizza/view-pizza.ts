import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.pizza = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPizzaPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
