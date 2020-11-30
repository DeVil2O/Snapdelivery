import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UpdateserviceService } from "./updateservice.service";
@Component({
  selector: "app-profileupdate",
  templateUrl: "./profileupdate.component.html",
  styleUrls: ["./profileupdate.component.css"],
})
export class ProfileupdateComponent implements OnInit {
  result: any;
  constructor(private sevice: UpdateserviceService, private router: Router) {}

  model: any = {};

  fullName = "";

  ngOnInit() {
    this.sevice.fetch().subscribe((res) => {
      this.result = res.json();
      this.model.fullName = this.result.user.fullName;
      this.model.address = this.result.user.address;
      this.model.age = this.result.user.age;
      this.model.city = this.result.user.city;
      this.model.pincode = this.result.user.pincode;
      this.model.email = this.result.user.email;
      this.model.gender = this.result.user.gender;
      this.model.state = this.result.user.state;
      this.model.mobileNumber = this.result.user.mobileNumber;
    });
  }

  updatePro(model) {
    console.log(model);
    this.sevice.update(model).subscribe((res) => {
      this.result = res.json();
      console.log(this.result);
    });
    alert("Successfully Updated");
  }
}
