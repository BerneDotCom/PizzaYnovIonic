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
    this.pizzaService.get().then(data => {
      this.pizzaList = data;
    });
  }

  remove(pizza: Pizza)
  {
    this.pizzaService.delete(pizza._id).then(data => {
      this.navCtrl.push(PizzaAdminPage)
    });
  }

  addNewPizza(){
    this.navCtrl.push(AddPizzaPage);
  }
}
