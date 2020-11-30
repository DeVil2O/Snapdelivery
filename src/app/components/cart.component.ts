import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MySharedService } from "../shared.service";

@Component({
  selector: "cart-component",
  template: `
    <div class="product-cart" *ngIf="cartItems && cartItems.length > 0">
      <ul>
        <li *ngFor="let item of cartItems">
          <img
            class="card-img-top"
            src="./../../assets/fried-egg.png"
            alt="Card image cap"
          />
          {{ item.name }}
          <span>{{ item.price | currency: "INR" }}</span>
          <button
            type="button"
            class="close"
            aria-label="Remove Item"
            (click)="removeItemFromCart(item.id)"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </li>
      </ul>
      <div class="cart-total">
        <div class="d-flex justify-content-between">
          <p>
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              (click)="emptyCart()"
            >
              Empty Cart
            </button>
          </p>
          <p class="text-right">
            <strong class="d-block">Total:</strong>
            <span class="d-block">{{ totalAmmount | currency: "INR" }}</span>
          </p>
        </div>

        <div class="d-flex justify-content-center mb-5">
          <button
            type="button"
            class="btn btn-success btn-lg"
            (click)="placeOrder()"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .product-cart {
        position: fixed;
        right: 1em;
        top: 73px;
        width: 350px;
        background-color: #fff;
        border: 1px solid #ccc;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }

      .product-cart ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      .product-cart li {
        display: flex;
        flex-flow: row;
        padding: 1em;
        border-bottom: 1px solid #ccc;
        font-size: 14px;
      }

      .product-cart img {
        height: 50px;
        width: auto;
        margin-right: 1em;
      }
    `,
  ],
})
export class CartComponent implements OnInit {
  cartItems;
  totalAmmount;
  @Input() restaurantId: any = "";

  constructor(
    private mySharedService: MySharedService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.mySharedService.getProducts().subscribe((data) => {
      this.cartItems = data;

      this.totalAmmount = this.mySharedService.getTotalPrice();
    });
  }

  // Remove item from cart list
  removeItemFromCart(productId) {
    this.mySharedService.removeProductFromCart(productId);
  }

  emptyCart() {
    this.mySharedService.emptryCart();
  }
  placeOrder() {
    const obj = { address: "", order: [], restaurantId: "" };
    const Dummyobj = this.cartItems.map((item) => {
      return { ...item, qty: 1 };
    });
    console.log(Dummyobj);
    obj.address = localStorage.getItem("address");
    obj.order = Dummyobj;
    obj.restaurantId = this.restaurantId;
    console.log(obj);
    this.mySharedService.placeOrderFromCart(obj).subscribe(
      (data) => {
        const resultr = data.json();
        console.log(resultr);
        this.router.navigate([""]);
      },
      (error) => {
        this.router.navigate([""]);
      }
    );
  }
}
