import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { MySharedService } from "../shared.service";

@Component({
  selector: "app-orderhistory",
  templateUrl: "./orderhistory.component.html",
  styleUrls: ["./orderhistory.component.css"],
})
export class OrderhistoryComponent implements OnInit {
  constructor(private sevice: MySharedService) {}

  result: any;

  ngOnInit() {
    this.sevice.fetch().subscribe((res) => {
      this.result = res.json();
      this.result = this.result.orders;
      console.log(this.result);
      this.result.map((order) => {
        var str = order.orderPlaced;
        var date = moment(str);
        var dateComponent = date.utc().format("YYYY-MM-DD");
        var timeComponent = date.utc().format("HH:mm:ss");
        order.orderPlaced = dateComponent;
        order.email = localStorage.getItem("email");
      });
    });
  }
}
