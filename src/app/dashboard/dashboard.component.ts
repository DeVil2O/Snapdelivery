import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    if (this.email) {
      this.b = true;
      console.log(this.b);
    }
  }
  b = false;

  email = localStorage.getItem("email");
  isrest = localStorage.getItem("isrest");
  token = localStorage.getItem("token");

  check() {
    if (this.isrest == "true" && this.token != undefined) {
      return true;
    }
    return false;
  }

  logout() {
    console.log("hello");
    localStorage.clear();
    this.b = false;
    this.router.navigateByUrl("");
  }
}
