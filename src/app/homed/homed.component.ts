import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FoodserviceService } from "../foodservice.service";
import { map } from "rxjs/operators";


@Component({
  selector: "app-homed",
  templateUrl: "./homed.component.html",
  styleUrls: ["./homed.component.css"],
})
export class HomedComponent implements OnInit {
  title = "Snap Delivery";
  cities: any;
  latitude: any;
  longitude: any;
  locate: any;
  loading: boolean;
  selectedCityName: string = "";
  cityName: string = "";

  constructor(
    private foodserve: FoodserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loading = true;
    this.cities = this.foodserve.cities;
    // console.log(this.cities);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.findPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    this.loading = false;
  }

  goToDashboard(e, cityName) {
    this.router.navigate(["/dashedboard", cityName]);
  }

  findPosition(position) {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.foodserve.getCoordinates(this.latitude, this.longitude).subscribe(
      (data) => {
        this.locate = data;
        this.goToDashboard("click", this.locate.location.city_name);
      },
      (err) => {
        this.router.navigate(["**"]);
      }
    );
  }
}
