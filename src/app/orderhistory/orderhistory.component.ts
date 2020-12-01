import { Component, OnInit } from "@angular/core";
import { Http, Headers,ResponseContentType} from "@angular/http";
import { HttpClient,HttpHeaders } from '@angular/common/http';

import * as moment from "moment";
import { MySharedService } from "../shared.service";
import { Observable } from 'rxjs/index';

@Component({
  selector: "app-orderhistory",
  templateUrl: "./orderhistory.component.html",
  styleUrls: ["./orderhistory.component.css"],
})
export class OrderhistoryComponent implements OnInit {
  constructor(private sevice: MySharedService,private http: Http,private httpClient:HttpClient) {}

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
  //
  download( id) {
       
  
    var headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    const token = localStorage.getItem("token");
    headers.append("Authorization", "bearer " + token);
   
   
    this.httpClient.get( `https://snapdeliveryapp.herokuapp.com/app/order/invoice?id=${id}`,{headers:headers,responseType: 'arraybuffer',
    observe: 'response'}).subscribe( data => {
      console.log(data);
      var file = new Blob([data["body"]], {type: 'application/pdf'});
      
      var link=document.createElement('a');
      link.href=window.URL.createObjectURL(file);
      link.download="Report_"+new Date()+".pdf";
      link.click();
      // var fileURL = window.URL.createObjectURL(file);
      // window.open(fileURL);
      
    });
  }
}

