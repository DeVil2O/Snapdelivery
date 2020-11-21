import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../login/loginservice.service';

@Component({
  selector: 'app-restlogincomponent',
  templateUrl: './restlogincomponent.component.html',
  styleUrls: ['./restlogincomponent.component.css'],
  providers:[LoginserviceService]

})
export class RestlogincomponentComponent implements OnInit {
  model: any = {};
  loading = false;
  details:any={}; 
  constructor(private router:Router,
              private loginservice:LoginserviceService) { }
  loginfun(){
    this.loading = true;
    const userdetails='username='+this.model.username+'email='+this.model.email+'&password='+this.model.password;
    this.loginservice.login(userdetails).subscribe(res=>{
    this.details = res.json();
    console.log(this.details);
    localStorage.setItem("token",this.details.token);
    localStorage.setItem("email",this.model.email);
        
    if(this.details =="Username not found")
    {     
      alert(this.details);
    }
    else if(this.details=="Incorrectusername password"){
      alert(this.details);
    }
    else
    {
      this.router.navigateByUrl(''); 
    }
    
    })     
  }
  
  ngOnInit() {
  }

}
