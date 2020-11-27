import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FoodserviceService } from "../foodservice.service";

@Component({
  selector: "app-dashedboard",
  templateUrl: "./dashedboard.component.html",
  styleUrls: ["./dashedboard.component.css"],
})
export class DashedboardComponent implements OnInit {
  title = "Food-e-Delicious";
  cityName: string = "";
  cityIdDetail: any;
  collection: any;
  categoriesDetail: any;
  establishment: any;
  restoList: any;
  selectedCityName: string = "";
  cities: any;
  collectionId: number;
  loading: boolean = false;
  searchRestoList: any = [];
  selectedRestoName: string = "";

  constructor(
    private foodservice: FoodserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.cities = this.foodservice.cities;
    this.getAllDetails();
  }

  async goToDashboard(e, cityName) {
    await this.router.navigate(["/dashedboard", cityName]);
    this.getAllDetails();
  }

  goToDetail(e, restoName) {
    if (restoName === "" || restoName === undefined) {
      this.router.navigate(["**"]);
    } else {
      this.router.navigate(["/detail", restoName]);
    }
  }

  async getAllDetails() {
    this.loading = true;
    const id = this.route.snapshot.paramMap.get("id").toString();
    this.cityName = id;
    this.selectedCityName = this.cityName;
    await this.foodservice.getCityId(id).subscribe(async (data) => {
      for (let key in data) {
        if (key == "location_suggestions") {
          this.cityIdDetail = await data[key][0].id;
          this.getcollectionDetails(this.cityIdDetail);
        }
      }
    });
    await this.getCategoriesDetails();
  }

  getcollectionDetails(cityId) {
    this.foodservice.getCollections(cityId).subscribe((data) => {
      this.collection = data;
      this.collection = this.collection.collections;
      for (let i of this.collection) {
        if (i.collection.title == "Trending This Week") {
          this.collection = i.collection;
          this.collectionId = i.collection.collection_id;
        }
      }
      this.getTrendingRestaurant(this.cityIdDetail, this.collectionId);
    });
  }

  getCategoriesDetails() {
    this.foodservice.getCategories().subscribe((data) => {
      this.categoriesDetail = data;
      this.categoriesDetail = this.categoriesDetail.categories;
    });
  }

  getTrendingRestaurant(cityId, collectionId) {
    this.foodservice.getTrendResto(cityId, collectionId).subscribe((data) => {
      this.restoList = data;
      this.restoList = Array.from(this.restoList.restaurants);
      this.searchRestoList = this.restoList;
      this.loading = false;
    });
  }
}
