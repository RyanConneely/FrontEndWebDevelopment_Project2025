import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  //method for pulling down json data from weather site
  getMoneyData(): Observable<any> { 
    return this.httpClient.get("https://openexchangerates.org/api/currencies.json");
  }

}