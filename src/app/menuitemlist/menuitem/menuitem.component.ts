import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {AdditemserviceService} from './../additem/additemservice.service';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit {

//  Items = [{price: 12,name: "Tomato Soup",description: "Panni wala tamatar"},{price: 12,name: "Tomato Soup",description: "Panni wala tamatar"},{price: 12,name: "Tomato Soup",description: "Panni wala tamatar"}];
@Input() item;
  constructor() { }
  
Items=[]
  ngOnInit() {
  
  // this.Items=this.additemService.Items;
  //   console.log(this.Items);
  }

  
}
