import { Component, OnInit } from "@angular/core";
import { FoodserviceService } from "../foodservice.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MyMainService } from "../main.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"],
})
export class DetailComponent implements OnInit {
  title: string = "Snap Delivery";
  reviewList: any;
  list: any;
  cities: any;
  loading: boolean;
  selectedCityName: string = "";
  cityName: string = "";
  restoName: string = "";
  selectedRestoName;
  searchRestoList;
  products: any = [];
  restaurantId: any = "";
  constructor(
    private foodservice: FoodserviceService,
    private route: ActivatedRoute,
    private router: Router,
    private myMainService: MyMainService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.cities = this.foodservice.cities;
    this.getRestoDetail();

    // this.myMainService.getProducts().subscribe((data) => {
    //   this.products = data.products;
    // });
  }

  goToDashboard(e, cityName) {
    this.router.navigate(["/dashboard", cityName]);
  }

  async getRestoDetail() {
    const id = this.route.snapshot.paramMap.get("id");
    this.restaurantId = id;
    await this.foodservice.getRestaurantDetails(id).subscribe(
      (data) => {
        const result = data.json();
        this.list = result.restaurant;
        console.log(this.list);
        this.myMainService.getProdDetails(this.list.menuId).subscribe(
          (data) => {
            const resultr = data.json();
            // this.listt = resultr.restaurant;
            
            this.products = resultr.menu.menu.map((item,index)=>{
              return {...item,imgUrl:"./../../assets/fooditem/food-" + ((index%5)+1)+".jpg"}
            })
          this.loading = false;
          
          },
          (error) => {
            this.router.navigate(["**"]);
          }
        );
      },
      (error) => {
        this.router.navigate(["**"]);
      }
    );
    // await this.foodservice.getRestaurantDetail(id).subscribe(
    //   (data) => {
    //     this.reviewList = data;
    //   },
    //   (error) => {
    //     this.router.navigate(["**"]);
    //   }
    // );
    // this.foodservice.getReview(id).subscribe(
    //   (data) => {
    //     this.reviewList = Object.assign(data, this.reviewList);
    //     this.list.push(this.reviewList);
    //     this.loading = false;
    //   },
    //   (error) => {
    //     this.router.navigate(["**"]);
    //   }
    // );
  }
}
