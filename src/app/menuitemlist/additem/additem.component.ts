import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AdditemserviceService } from "./additemservice.service";

@Component({
  selector: "app-additem",
  templateUrl: "./additem.component.html",
  styleUrls: ["./additem.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class AdditemComponent implements OnInit {
  data: any = {};
  show = true;

  constructor(
    private route: ActivatedRoute,
    private additemService: AdditemserviceService
  ) {}

  ngOnInit() {}

  addItem(data) {
    console.log(data);
    this.additemService.additem(data);
    this.show = !this.show;
    console.log(this.additemService.Items);
  }
}
