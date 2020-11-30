import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
@Injectable({
  providedIn: "root",
})
export class AdditemserviceService {
  counter: number = 4;
  Items = [
    {
      id: 1,
      price: 122,
      name: "Copper Soup",
      description: "Panni wala Copper",
    },
    {
      id: 2,
      price: 200,
      name: "Silver Soup",
      description: "Panni wala Silver",
    },
    {
      id: 3,
      price: 500,
      name: "Gold Soup",
      description: "Panni wala Gold",
    },
    {
      id: 4,
      price: 430,
      name: "Diamond Soup",
      description: "Panni wala Diamond",
    },
  ];

  constructor(private http: Http) {}
  fetch() {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    const token = localStorage.getItem("token");
    headers.append("Authorization", "bearer " + token);

    return this.http.get(
      "https://snapdeliveryapp.herokuapp.com/app/menu/fetch?id=5fc3b440515bbd0004e1c8e0",

      { headers: headers }
    );
  }
  create() {
    var headers = new Headers();
    var obj = { menu: this.Items };
    console.log(obj);

    headers.append("Content-Type", "application/json");
    const token = localStorage.getItem("token");
    headers.append("Authorization", "bearer " + token);
    return this.http.put(
      "https://snapdeliveryapp.herokuapp.com/app/menu/update",
      obj,
      { headers: headers }
    );
  }
}
