import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  title: string = "Food-e-Delicious";
  reviewList: any;
  list: any = [];
  cities: any;
  loading: boolean;
  selectedCityName: string ="";
  cityName: string ="";
  restoName: string = "";
  selectedRestoName;
  searchRestoList;

  constructor(private foodservice: FoodserviceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.cities = this.foodservice.cities;
    this.getRestoDetail();
  }

  goToDashboard(e, cityName) {
    this.router.navigate(['/dashboard', cityName]);
  }

  async getRestoDetail() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    await this.foodservice.getRestaurantDetail(id).subscribe(
      data => {
        this.reviewList = data;
      },
      error => {
        this.router.navigate(['**']);
      }
    );
    this.foodservice.getReview(id).subscribe(
        data => {
          this.reviewList = Object.assign(data, this.reviewList);
          this.list.push(this.reviewList);
          this.loading = false;
        },
        error => {
          this.router.navigate(['**']);
        }
      );
  }
}
