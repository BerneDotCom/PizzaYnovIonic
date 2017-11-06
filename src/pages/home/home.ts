import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PizzaService } from '../../providers/pizza-service/pizza-service';
import { ModalController, ToastController } from 'ionic-angular';
import { ViewPizzaPage } from '../view-pizza/view-pizza';
import { iPizza } from '../../models/pizza';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //All my pizzas available
  pizzas: [iPizza];

  constructor(public navCtrl: NavController, public PizzaService: PizzaService,public modalCtrl: ModalController, public toastCtrl: ToastController) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad IngredientPage');
    //When API is not running

    //When API is running
    this.PizzaService.get().then(data => {
      this.pizzas = data
    });
  }

/**
* Function called when a pizza is selected
*/
  viewPizza(pizza: iPizza){
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

  /**
  * Delete from API the selected pizza
  */
  delete(pizza: iPizza)
  {
    let toast = this.toastCtrl.create({
      message: 'Pizza supprimée',
      duration: 3000
    });
    toast.present();

    // this.PizzaService.delete(pizza._id).then(data => {
    //   this.pizzas = data
    //   console.log(data);
    // });
  }

}
