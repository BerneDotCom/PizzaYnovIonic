import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from '../../models/ingredient';
import { Pizza } from '../../models/pizza';

import 'rxjs/add/operator/map';

/**
  Generated class for the PizzaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
**/
@Injectable()
export class PizzaService {
  data: any;
  private readonly url = 'https://pizza-bernedotcom.c9users.io/pizza/';

  constructor(public http: HttpClient) {
    console.log('Hello PizzaServiceProvider Provider');
  }

/**
* Get all pizzas from API
**/
  get(){
    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      //When API is not running : this.url = 'assets/pizza.json'
      this.http.get(this.url).subscribe(data => {
        this.data = data;
        resolve(this.data);
      })
    })
  }

/**
* Return a pizza from API by id parameter
**/
  getById(id:string){
    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.url + id).subscribe(data => {
        this.data = data;
        resolve(this.data);
      })
    })
  }

  /**
  * Delete a pizza from API by id parameter
  **/
  delete(id: string){
    return new Promise(resolve => {
      this.http.delete(this.url + id).subscribe(data => {
        this.data = data;
        resolve(this.data);
      })
    })
  }


  /**
  * Add a pizza with API
  **/
  add(pizza: Pizza){
    let headers = {
        'Content-Type': 'application/json'
    };

    return new Promise(resolve => {
      this.http.post(this.url, pizza, headers).subscribe(data => {
        resolve(this.data);
      })
    });
  }
}
