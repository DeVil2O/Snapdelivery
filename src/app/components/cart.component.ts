import { Component, OnInit } from "@angular/core";
import { MySharedService } from "../shared.service";

@Component({
  selector: "cart-component",
  template: `
    <div class="product-cart" *ngIf="cartItems && cartItems.length > 0">
      <ul>
        <li *ngFor="let item of cartItems">
          <img
            class="card-img-top"
            src="{{ item.image }}"
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

        <button
          type="button"
          class="btn btn-outline-primary btn-sm"
          (click)="emptyCart()"
        >
          Empty Cart
        </button>
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

  constructor(private mySharedService: MySharedService) {}

  ngOnInit() {
    this.mySharedService.getProducts().subscribe((data) => {
      this.cartItems = data;

      this.totalAmmount = this.mySharedService.getTotalPrice();
    });
  }

  // Remove item from cart list
  removeItemFromCart(productId) {
    /* this.cartItems.map((item, index) => {
      if (item.id === productId) {
        this.cartItems.splice(index, 1);
      }
    });

    this.mySharedService.setProducts(this.cartItems); */

    this.mySharedService.removeProductFromCart(productId);
  }

  emptyCart() {
    this.mySharedService.emptryCart();
  }
}
