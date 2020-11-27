import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-additem",
  templateUrl: "./additem.component.html",
  styleUrls: ["./additem.component.css"],
})
export class AdditemComponent implements OnInit {
  data: any = {};
  @Output() passItem = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  addItem(data) {
    console.log(data);
    this.passItem.emit(data);
    this.data = {};
  }
}
