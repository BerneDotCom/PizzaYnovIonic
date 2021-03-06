import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { PizzaService } from '../../providers/pizza-service/pizza-service';
import { ModalController, ToastController } from 'ionic-angular';
import { ViewPizzaPage } from '../view-pizza/view-pizza';
import { Pizza } from '../../models/pizza';
import { IntroPage } from '../intro/intro';

import { PanierService } from '../../providers/panier-service/panier-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //All my pizzas available
  pizzas: [Pizza];

  constructor(public navCtrl: NavController, public PizzaService: PizzaService,public modalCtrl: ModalController, public toastCtrl: ToastController, public storage: Storage, private panierService: PanierService) {

  }


  ionViewDidLoad() {
    //Handling intro pages
    this.storage.get('intro-done').then(done => {
        if (!done) {
          this.storage.set('intro-done', true);
          this.navCtrl.setRoot(IntroPage);
        }
      });

    //When API is not running

    //When API is running
    this.PizzaService.get().then(data => {
      this.pizzas = data
    });
  }

/**
* Function called when a pizza is selected
*/
  viewPizza(pizza: Pizza){
    //pizza is the object selected by the user

     let modal = this.modalCtrl.create(ViewPizzaPage, {'data': pizza});

     //Display modal for the pizza
     modal.present();
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
