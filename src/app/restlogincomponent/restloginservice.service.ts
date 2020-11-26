import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService { 
  constructor(private http:Http) { }
  login(userdetails) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
    return this.http.post('https://snapdeliveryapp.herokuapp.com/app/restaurant/login'  , userdetails,{headers:headers});
    }
  
    addreg(obj){
      var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
      return this.http.post('https://snapdeliveryapp.herokuapp.com/app/restaurant/create' ,obj,{headers:headers});
    }

}