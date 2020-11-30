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
  resultt: any;
  ngOnInit() {
    this.service.fetch().subscribe((res) => {
      this.resultt = res.json();
      console.log(this.resultt);
      this.Items = this.resultt.menu.menu;
    });
  }
  result: any;
  addMenu() {
    // console.log(model);
    this.service.create().subscribe((res) => {
      this.result = res.json();
      console.log(this.result);
    });

    // this.service.create();
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
