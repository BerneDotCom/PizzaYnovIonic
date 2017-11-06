import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PizzaService } from '../../providers/pizza-service/pizza-service';
import { ModalController, NavParams, Platform, ViewController, ToastController } from 'ionic-angular';
import { ViewPizzaPage } from '../view-pizza/view-pizza';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //All my pizzas available
  pizzas: [{_id:Number, name:String, desc:String, picture:String, price:Number, ingredient_ids:Array<Object>}];

  constructor(public navCtrl: NavController, public PizzaService: PizzaService,public modalCtrl: ModalController, public toastCtrl: ToastController) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad IngredientPage');
    //When API is not running

    //When API is running
    this.PizzaService.get().then(data => {
      this.pizzas = data
      console.log(data);
    });
  }

/**
* Function called when a pizza is selected
*/
  viewPizza(pizza: Object){
    //pizza is the object selected by the user

     let modal = this.modalCtrl.create(ViewPizzaPage, {'data': pizza});

     //Display modal for the pizza
     modal.present();
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
