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
    
    return this.http.post('https://snapdeliveryapp.herokuapp.com/app/user/login'  , userdetails,{headers:headers});
    }
  
    addreg(obj){
      var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
      return this.http.post('https://snapdeliveryapp.herokuapp.com/app/user/create' ,obj,{headers:headers});
    }

}