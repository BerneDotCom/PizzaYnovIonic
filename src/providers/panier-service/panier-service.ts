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

  get(){
    return this.panier;
  }
  
  add(pizza){
    this.panier.push(pizza);
  }
}
