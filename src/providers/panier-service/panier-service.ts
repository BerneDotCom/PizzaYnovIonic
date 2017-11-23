import { Injectable } from '@angular/core';
import { Pizza } from '../../models/pizza';

import 'rxjs/add/operator/map';

/**
  Generated class for the PizzaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
**/
@Injectable()
export class PanierService {

  panier: Pizza[];
  constructor() {
    this.panier = [];
  }

  //Return all pizzas added in bucket
  get(){
    return this.panier;
  }

  //Add a pizza in bucket
  add(pizza){
    this.panier.push(pizza);
  }
}
