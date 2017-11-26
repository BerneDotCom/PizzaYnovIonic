import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PizzaService } from '../../providers/pizza-service/pizza-service';
import { Pizza } from '../../models/pizza';
import { AddPizzaPage } from '../add-pizza/add-pizza';

@IonicPage()
@Component({
  selector: 'page-pizza-admin',
  templateUrl: 'pizza-admin.html',
})
export class PizzaAdminPage {

  pizzaList: Pizza[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private pizzaService: PizzaService) {
  }

  ionViewDidLoad() {
    //Get all pizzas from API
    this.pizzaService.get().then(data => {
      this.pizzaList = data;
    });
  }

  remove(pizza: Pizza)
  {
    //Remove from API the selected pizza
    this.pizzaService.delete(pizza._id).then(data => {

      //Redirect to PizzaAdminPage
      this.navCtrl.push(PizzaAdminPage)
    });
  }

  addNewPizza(){
    //Add the selected pizza to the bucket
    this.navCtrl.push(AddPizzaPage);
  }

  edit(pizza: Pizza){
    //Add the selected pizza to the bucket
    this.navCtrl.push(AddPizzaPage);
  }
}
