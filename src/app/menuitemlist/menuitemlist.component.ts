import { Component, OnInit, ViewChild } from "@angular/core";
import { AdditemserviceService } from "./additem/additemservice.service";

@Component({
  selector: "app-menuitemlist",
  templateUrl: "./menuitemlist.component.html",
  styleUrls: ["./menuitemlist.component.css"],
})
export class MenuitemlistComponent implements OnInit {
  Items = [];
  showAdd: Boolean = false;
  constructor(private service: AdditemserviceService) {}

  ngOnInit() {
    this.Items = this.service.Items;
  }

  getItem(item) {
    this.service.counter++;
    this.Items.push({ ...item, id: this.service.counter });
    console.log(this.Items);
    this.showAdd = false;
    this.ngOnInit();
  }
  deleteItem(data) {
    const ind = this.Items.findIndex((item) => item.id === data.id);
    this.Items.splice(ind, 1);
    console.log(this.Items);
  }
}
