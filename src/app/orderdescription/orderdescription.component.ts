import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as moment from "moment";
import { MySharedService } from "../shared.service";

@Component({
  selector: "app-orderdescription",
  templateUrl: "./orderdescription.component.html",
  styleUrls: ["./orderdescription.component.css"],
})
export class OrderdescriptionComponent implements OnInit {
  constructor(private sevice: MySharedService, private route: ActivatedRoute) {}

  result: any;

  ngOnInit() {
    const orderId = this.route.snapshot.paramMap.get("id").toString();
    console.log(orderId);
    this.sevice.fetchId(orderId).subscribe((res) => {
      this.result = res.json();
      console.log(this.result.order.order);
      var str = this.result.orderPlaced;
      var date = moment(str);
      var dateComponent = date.utc().format("YYYY-MM-DD");
      var timeComponent = date.utc().format("HH:mm:ss");
      this.result.orderPlaced = dateComponent;
      // this.result.map((order) => {

      //   order.email = localStorage.getItem("email");
      // });
    });
  }
}
