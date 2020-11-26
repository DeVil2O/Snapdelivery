import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
  export class AdditemserviceService {
 Items = [{price: 12,name: "Tomato Soup",description: "Panni wala tamatar"},{price: 12,name: "Tomato Soup",description: "Panni wala tamatar"},{price: 12,name: "Tomato Soup",description: "Panni wala tamatar"},{price: 12,name: "Tomato Soup",description: "Panni wala tamatar"}];
  
    constructor() {}
  
    // additem(data){
    //     this.Items.push(data);
    //   }
    
  }