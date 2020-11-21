import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { ServicesComponent } from './services/services.component';


import { ChildServiceComponent } from './child-service/child-service.component';
import { RegisterComponent } from './register/register.component';
import { RestlogincomponentComponent } from './restlogincomponent/restlogincomponent.component';
import { RestregisterComponent } from './restregister/restregister.component';



const routes: Routes = [
  {path:'customer/login',component:LoginComponent},
  {path:'restaurant/login',component:RestlogincomponentComponent},

  {path:'restaurant/register',component:RestregisterComponent},
  
  {path:'customer/register',component:RegisterComponent},
  {path:'',component:DashboardComponent,
    children:[{path:'chil-service',component:ChildServiceComponent}]
  }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
