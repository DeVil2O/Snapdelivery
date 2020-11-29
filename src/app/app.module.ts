import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AboutComponent } from "./about/about.component";
import { ChildServiceComponent } from "./child-service/child-service.component";
import { LoginserviceService } from "./login/loginservice.service";
import { HttpModule } from "@angular/http";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";

import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatNativeDateModule } from "@angular/material/core";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { AboutrestComponent } from "./aboutrest/aboutrest.component";
import { RestlogincomponentComponent } from "./restlogincomponent/restlogincomponent.component";
import { RestregisterComponent } from "./restregister/restregister.component";
import { MenuitemlistComponent } from "./menuitemlist/menuitemlist.component";
import { MenuitemComponent } from "./menuitemlist/menuitem/menuitem.component";
import { AdditemComponent } from "./menuitemlist/additem/additem.component";
import { DashedboardComponent } from "./dashedboard/dashedboard.component";
import { LoaderComponent } from "./loader/loader.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { DetailComponent } from "./detail/detail.component";
import { FoodserviceService } from "./foodservice.service";
import { HomedComponent } from "./homed/homed.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { HttpClientModule } from "@angular/common/http";
import { AddtocartComponent } from "./addtocart/addtocart.component";
import { UserdashboardComponent } from "./userdashboard/userdashboard.component";
import { UsermenuComponent } from "./usermenu/usermenu.component";
import { UsermenuitemComponent } from "./usermenu/usermenuitem/usermenuitem.component";
import { UseraddtocartmenuComponent } from "./usermenu/useraddtocartmenu/useraddtocartmenu.component";

import { MyMainService } from "./main.service";
import { MySharedService } from "./shared.service";
import { CartComponent } from "./components/cart.component";
import { HeaderComponent } from "./components/header.component";
import { ProductListComponent } from "./components/product-list.component";
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ChildServiceComponent,
    RegisterComponent,
    HomeComponent,
    MenuComponent,
    AboutrestComponent,
    RestlogincomponentComponent,
    RestregisterComponent,
    AboutComponent,
    MenuitemlistComponent,
    MenuitemComponent,
    AdditemComponent,
    DashedboardComponent,
    LoaderComponent,
    PageNotFoundComponent,
    DetailComponent,
    HomedComponent,
    AddtocartComponent,
    CartComponent,
    UserdashboardComponent,
    UsermenuComponent,
    UsermenuitemComponent,
    UseraddtocartmenuComponent,
    HeaderComponent,
    ProductListComponent,
    ProfileupdateComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatBottomSheetModule,
    MatDialogModule,
    NgSelectModule,
    HttpClientModule,
  ],
  providers: [
    LoginserviceService,
    FoodserviceService,
    MyMainService,
    MySharedService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
