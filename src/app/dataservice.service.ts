import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

@Injectable({
  providedIn: "root",
})
export class DataserviceService {
  constructor(private http: Http) {}
  stripePayment(data) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    const token = localStorage.getItem("token");
    headers.append("Authorization", "bearer " + token);

    let responseRestaurant = this.http.post(
      "https://snapdeliveryapp.herokuapp.com/app/stripe/payment",
      data,
      { headers: headers }
    );
    // console.log(responseRestaurant);
    return responseRestaurant;
  }
}
