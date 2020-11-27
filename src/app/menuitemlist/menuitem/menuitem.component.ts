import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-menuitem",
  templateUrl: "./menuitem.component.html",
  styleUrls: ["./menuitem.component.css"],
})
export class MenuitemComponent implements OnInit {
  @Input() item;
  data: any = {};
  @Output() passItem = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  deleteItem(data) {
    console.log(data);
    this.passItem.emit(data);
    this.data = {};
  }
}
