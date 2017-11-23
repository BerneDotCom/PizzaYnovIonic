import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PanierService } from '../../providers/panier-service/panier-service';
import { Pizza } from '../../models/pizza';

/**
 * Generated class for the PanierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-panier',
  templateUrl: 'panier.html',
})
export class PanierPage {

  panier: Pizza[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private panierService: PanierService) {
  }

  ionViewDidLoad() {
    this.panier = this.panierService.get();
  }

}
