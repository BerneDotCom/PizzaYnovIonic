import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PizzaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IngredientService {
  data: any;
  // private readonly url = 'https://pizza4allservicies-youngjeremy.c9users.io/ingredient/';

  constructor(public http: HttpClient) {
    console.log('Hello IngredientProvider Provider');
  }

/**
* Get all ingredients from API
**/
  get(){
    // if(this.data){
    //   return Promise.resolve(this.data);
    // }
    //
    // return new Promise(resolve => {
    //   //When API is not running : this.url = 'assets/pizza.json'
    //   this.http.get(this.url).subscribe(data => {
    //     this.data = data;
    //     resolve(this.data);
    //   })
    // })
  }

/**
* Return an ingredient from API by id parameter
**/
  getById(id:Number){
    // if(this.data){
    //   return Promise.resolve(this.data);
    // }
    //
    // return new Promise(resolve => {
    //   this.http.get(this.url + id).subscribe(data => {
    //     this.data = data;
    //     console.log(this,'Data', data);
    //     resolve(this.data);
    //   })
    // })
  }


  /**
  * Delete an ingredient from API by id parameter
  **/
    delete(name:String){
      // if(this.data){
      //   return Promise.resolve(this.data);
      // }
      //
      // return new Promise(resolve => {
      //   this.http.get(this.url + 'delete/' + name).subscribe(data => {
      //     this.data = data;
      //     console.log(this,'Data', data);
      //     resolve(this.data);
      //   })
      // })
    }
}
