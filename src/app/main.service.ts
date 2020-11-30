import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable()
export class MyMainService {
  constructor(private http: Http) {}

  getProducts() {
    return this.http
      .get("../assets/data/products.json")
      .pipe(map((response: any) => response.json()));
  }

  getProdDetails(menuId) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    const token = localStorage.getItem("token");
    headers.append("Authorization", "bearer " + token);

    let responseRestaurant = this.http.get(
      "https://snapdeliveryapp.herokuapp.com/app/menu/fetch?id=" + menuId,
      { headers: headers }
    );
    // console.log(responseRestaurant);
    return responseRestaurant;
  }
}
