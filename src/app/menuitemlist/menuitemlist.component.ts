import { Component, OnInit, ViewChild } from '@angular/core';
import { AdditemserviceService } from './additem/additemservice.service';


@Component({
  selector: 'app-menuitemlist',
  templateUrl: './menuitemlist.component.html',
  styleUrls: ['./menuitemlist.component.css']
})
export class MenuitemlistComponent implements OnInit {

   Items=[];
   showAdd:Boolean = false;
  constructor(private service : AdditemserviceService) { }

 
  ngOnInit() {
    console.log("init menu item");
    this.Items=this.service.Items;
  }


  getItem(item){
    this.Items.push(item);
    this.showAdd = false;
    this.ngOnInit();
  }


}
