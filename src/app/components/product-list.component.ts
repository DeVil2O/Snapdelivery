import { Component, Input, OnInit, Renderer2 } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { MySharedService } from "../shared.service";

// import { MySharedService } from "../shared.service";

@Component({
  selector: "product-list-component",
  template: `
    <div class="container">
      <div class="row product-list" style="margin: 1em 0;">
        <!-- START : Product Card -->
        <div
          class="col-sm-12 col-md-6 col-lg-4 product-list__item"
          *ngFor="let product of products; let i = index"
        >
          <div class="card mb-4 shadow-sm pd-5">
            <div class="product-list__image">
              <img
                class="card-img-top"
                src="{{product.imgUrl}}"
                alt="Card image cap"
              />
            </div>

            <div class="card-body">
              <h4>{{ product.name }}</h4>
              <p class="card-text">{{ product.description }}</p>

              <div class="text-center">
                <button
                  type="button"
                  class="btn btn-sm"
                  [ngClass]="
                    this.isAdded[i] ? 'btn-success' : 'btn-outline-secondary'
                  "
                  (click)="addToCart($event, product.id)"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- END : Product Card -->
      </div>
    </div>
  `,
  styles: [
    `
      .product-list__item h4 {
        font-size: 16px;
      }

      .product-list__image {
        padding: 1em;
        height: 300px;
      }

      .product-list__image img {
        max-width: 100%;
      }
    `,
  ],
})
export class ProductListComponent implements OnInit {
  @Input() products: any = [];
  singleProduct;
  isAdded;

  constructor(
    private renderer: Renderer2,
    private mySharedService: MySharedService,
    private http: Http
  ) {}

  ngOnInit() {
    this.isAdded = new Array(this.products.length);
    this.isAdded.fill(false, 0, this.products.length);
    console.log("this.isAdded -> ", this.isAdded, this.products);

    this.mySharedService.getProducts().subscribe((data) => {
      if (data && data.length > 0) {
      } else {
        this.products.map((item, index) => {
          this.isAdded[index] = false;
        });
      }
    });
  }

  addToCart(event, productId) {
    if (event.target.classList.contains("btn-success")) {
      alert("This product is already added into cart.");
      return false;
    }

    // Change button color to green
    this.products.map((item, index) => {
      if (item.id === productId) {
        this.isAdded[index] = true;
      }
    });

    this.singleProduct = this.products.filter((product) => {
      return product.id === productId;
    });

    // this.cartItems.push(this.singleProduct[0]);

    this.mySharedService.addProductToCart(this.singleProduct[0]);
  }
}
