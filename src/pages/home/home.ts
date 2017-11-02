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
    this.PizzaService.get().then(data => {
      this.pizzas = data
      console.log(data);
    });
  }

  viewPizza(id:Number){
    this.PizzaService.getById(id).then(data => {
        console.log('Data', data);
       let modal = this.modalCtrl.create(ViewPizzaPage, {'data': data});
       modal.present();
    });
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Votre pizza a bien été ajoutée à votre panier',
      duration: 3000
    });
    toast.present();
  }

}
