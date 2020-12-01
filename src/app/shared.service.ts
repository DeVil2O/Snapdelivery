import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { Subject } from "rxjs";
// import { BehaviorSubject } from "rxjs";

@Injectable()
export class MySharedService {
  // Local variable which stores
  public cartItems = [];
  public products = new Subject();

  constructor(private http: Http) {}
  getProducts(): Observable<any> {
    console.log("this.cartItems :", this.cartItems);

    return this.products.asObservable();
  }

  setProducts(products) {
    this.cartItems.push(...products);
    this.products.next(products);
  }

  // Add single product to the cart
  addProductToCart(product) {
    this.cartItems.push(product);
    this.products.next(this.cartItems);
  }

  // Remove single product from the cart
  removeProductFromCart(productId) {
    this.cartItems.map((item, index) => {
      if (item.id === productId) {
        this.cartItems.splice(index, 1);
      }
    });

    // Update Observable value
    this.products.next(this.cartItems);
  }
  placeOrderFromCart(obj) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    const token = localStorage.getItem("token");
    headers.append("Authorization", "bearer " + token);

    let responseRestaurant = this.http.post(
      "https://snapdeliveryapp.herokuapp.com/app/order/create",
      obj,
      { headers: headers }
    );
    return responseRestaurant;
  }

  // Remove all the items added to the cart
  emptryCart() {
    this.cartItems.length = 0;
    this.products.next(this.cartItems);
  }

  // Calculate total price on item added to the cart
  getTotalPrice() {
    let total = 0;

    this.cartItems.map((item) => {
      total += item.price;
    });

    return total;
  }
  fetch() {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    const token = localStorage.getItem("token");
    headers.append("Authorization", "bearer " + token);

    return this.http.get(
      "https://snapdeliveryapp.herokuapp.com/app/order/fetchAll",

      { headers: headers }
    );
  }
  fetchId(orderId) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    const token = localStorage.getItem("token");
    headers.append("Authorization", "bearer " + token);

    return this.http.get(
      "https://snapdeliveryapp.herokuapp.com/app/order/fetch?id=" + orderId,

      { headers: headers }
    );
  }
  updateorder(obj) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    const token = localStorage.getItem("token");
    headers.append("Authorization", "bearer " + token);
    return this.http.put(
      "https://snapdeliveryapp.herokuapp.com/app/order/update",
      obj,
      { headers: headers }
    );
  }
  downloadOrder(id) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    const token = localStorage.getItem("token");
    headers.append("Authorization", "bearer " + token);
    return this.http.get(
      `https://snapdeliveryapp.herokuapp.com/app/order/invoice?id=${id}`,
      { headers: headers }
    );
  
  }
}


