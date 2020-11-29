import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable()
export class MyMainService {
  constructor(private http: Http) {}

  getProducts() {
    return this.http
      .get("../assets/data/products.json")
      .pipe(map((response: any) => response.json()));
  }
}
