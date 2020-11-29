import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

@Injectable({
  providedIn: "root",
})
export class UpdateserviceService {
  constructor(private http: Http) {}
  fetch() {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    const token = localStorage.getItem("token");
    headers.append("Authorization", "bearer " + token);

    return this.http.get(
      "https://snapdeliveryapp.herokuapp.com/app/user/fetch/",

      { headers: headers }
    );
  }
  update(obj) {
    alert(obj);
  }
}
