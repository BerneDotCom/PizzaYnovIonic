import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PizzaService } from '../../providers/pizza-service/pizza-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //All my pizzas available
  pizzas: [{name:String, desc:String, picture:String, price:Number, ingredient_ids:Array<Object>}];

  constructor(public navCtrl: NavController, public PizzaService: PizzaService) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad IngredientPage');
    this.PizzaService.get().then(data => {
      this.pizzas = data;
      console.log(data);
    });
  }

}
