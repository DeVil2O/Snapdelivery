import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CartService } from "./../../cartservice.service";
@Component({
  selector: "app-menuitem",
  templateUrl: "./menuitem.component.html",
  styleUrls: ["./menuitem.component.css"],
})
export class MenuitemComponent implements OnInit {
  @Input() item;
  data: any = {};
  @Output() passItem = new EventEmitter();

  constructor(private cartService:CartService ) {}

  ngOnInit() {}

  deleteItem(data) {
    console.log(data);
    this.passItem.emit(data);
    this.data = {};
  }
  addItemToCart(data) {

    this.cartService.addToCart(data);
    window.alert("Your product has been added to the cart!");

  }
}
