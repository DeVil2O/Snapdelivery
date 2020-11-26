import { Component, OnInit } from '@angular/core';
import { AdditemserviceService } from './additem/additemservice.service';


@Component({
  selector: 'app-menuitemlist',
  templateUrl: './menuitemlist.component.html',
  styleUrls: ['./menuitemlist.component.css']
})
export class MenuitemlistComponent implements OnInit {

    // Items=
  constructor(private service : AdditemserviceService) { }

  ngOnInit() {
  }


}
