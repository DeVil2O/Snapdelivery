import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
//import { ServicesComponent } from './services/services.component';

import { ChildServiceComponent } from "./child-service/child-service.component";
import { RegisterComponent } from "./register/register.component";
import { RestlogincomponentComponent } from "./restlogincomponent/restlogincomponent.component";
import { RestregisterComponent } from "./restregister/restregister.component";
import { HomedComponent } from "./homed/homed.component";
import { DashedboardComponent } from "./dashedboard/dashedboard.component";
import { DetailComponent } from "./detail/detail.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProfileupdateComponent } from "./profileupdate/profileupdate.component";
import { OrderhistoryComponent } from "./orderhistory/orderhistory.component";
import { OrderdescriptionComponent } from "./orderdescription/orderdescription.component";
import { RestorderlistComponent } from "./restorderlist/restorderlist.component";
import { PaymentComponent } from "./payment/payment.component";
const routes: Routes = [
  { path: "customer/login", component: LoginComponent },
  { path: "restaurant/login", component: RestlogincomponentComponent },
  { path: "restaurant/register", component: RestregisterComponent },
  { path: "customer/register", component: RegisterComponent },
  { path: "restsearch", component: HomedComponent },
  {
    path: "",
    component: DashboardComponent,
    children: [{ path: "chil-service", component: ChildServiceComponent }],
  },
  { path: "homed", component: HomedComponent },
  { path: "dashedboard/:id", component: DashedboardComponent },
  { path: "detail/:id", component: DetailComponent },
  { path: "orders", component: OrderhistoryComponent },
  { path: "profile", component: ProfileupdateComponent },
  { path: "orderdescription/:id", component: OrderdescriptionComponent },
  {
    path: "restorderhistory",
    component: RestorderlistComponent,
  },
  { path: "payfororder/:amount", component: PaymentComponent },

  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
