import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AdditemserviceService } from "./../additem/additemservice.service";

@Component({
  selector: "app-menuitem",
  templateUrl: "./menuitem.component.html",
  styleUrls: ["./menuitem.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class MenuitemComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private additemService: AdditemserviceService
  ) {}

  Items = [];
  ngOnInit() {
    console.log(this.Items);
    this.Items = this.additemService.Items;
  }

  addItem(data) {
    this.additemService.additem(data);
  }
}
