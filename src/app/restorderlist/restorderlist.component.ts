import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as moment from "moment";

import { MySharedService } from "../shared.service";

@Component({
  selector: "app-restorderlist",
  templateUrl: "./restorderlist.component.html",
  styleUrls: ["./restorderlist.component.css"],
})
export class RestorderlistComponent implements OnInit {
  result: any;
  constructor(private sevice: MySharedService, private router: Router) {}
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

  updateOrd(data, id) {
    console.log();
    var obj = { _id: "", status: "" };
    obj.status = data;
    obj._id = id;
    this.sevice.updateorder(obj).subscribe((res) => {
      this.result = res.json();
      window.location.reload();
    });
  }
}
