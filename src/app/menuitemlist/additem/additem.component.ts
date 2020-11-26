import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdditemserviceService } from './additemservice.service';


@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  data:any={};
  @Output() passItem = new EventEmitter;
  constructor(private route:ActivatedRoute,private additemService: AdditemserviceService) { }

  ngOnInit() {
  }
  
  addItem(data){
    console.log(data);
    this.passItem.emit(data);
    this.data = {};
   
    
  }
  
}
