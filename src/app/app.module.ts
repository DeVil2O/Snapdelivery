import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

//import { AboutComponent } from './about/about.component';
import { ChildServiceComponent } from './child-service/child-service.component';
import { LoginserviceService } from './login/loginservice.service';
import {HttpModule} from '@angular/http';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutrestComponent } from './aboutrest/aboutrest.component';
import { RestlogincomponentComponent } from './restlogincomponent/restlogincomponent.component';
import { RestregisterComponent } from './restregister/restregister.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ChildServiceComponent,    
    RegisterComponent, HomeComponent, MenuComponent, AboutrestComponent, RestlogincomponentComponent, RestregisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule 
  ],
  providers: [LoginserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
