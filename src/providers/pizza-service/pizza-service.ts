import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PizzaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PizzaService {
  data: any;
  private readonly url = 'https://pizza4allservicies-youngjeremy.c9users.io/pizza/';

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
      this.http.get('assets/pizza.json').subscribe(data => {
        this.data = data;
        resolve(this.data);
      })
    })
  }

/**
* Return a pizza from API by id parameter
**/
  getById(id:Number){
    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.url + id).subscribe(data => {
        this.data = data;
        console.log(this,'Data', data);
        resolve(this.data);
      })
    })
  }
}
