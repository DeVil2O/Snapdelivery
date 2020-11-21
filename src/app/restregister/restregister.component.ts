import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../login/loginservice.service';

@Component({
  selector: 'app-restregister',
  templateUrl: './restregister.component.html',
  styleUrls: ['./restregister.component.css']
})
export class RestregisterComponent implements OnInit {
  model:any={};
  result :any;
  constructor(private sevice:LoginserviceService,
  private router:Router ) { }

  ngOnInit() {
  }
  registerfun(model){
    
    this.sevice.addreg(model).subscribe(res=>{
      this.result = res.json();
      console.log(this.result);
      this.router.navigate([''])
    })
   
  }
}
