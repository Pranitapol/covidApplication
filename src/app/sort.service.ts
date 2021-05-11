import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor(private HttpClient: HttpClient) { }
  //https://corona.lmao.ninja/v2/countries?sort=cases
  //fetch data by country
  getByCountry(selectVal: any): Observable<any> {
    return this.HttpClient.get<any>(`https://corona.lmao.ninja/v2/countries?sort=${selectVal}`);
  }
//fetch data by death value
  getByDeath(selectVal: any) {
    return this.HttpClient.get<any>(`https://corona.lmao.ninja/v2/countries?sort=${selectVal}`);
  }
  //fetch data by recovered value
  getByRecovered(selectVal: any) {
    return this.HttpClient.get<any>(`https://corona.lmao.ninja/v2/countries?sort=${selectVal}`)

  }

  //fetch data by death per people value
  getByOneDeathPerPeople(selectVal: any) {
    return this.HttpClient.get<any>(`https://corona.lmao.ninja/v2/countries?sort=${selectVal}`);
  }

  //fetch data by one case per people value
  getByOneCasePerPeople(selectVal: any) {
    return this.HttpClient.get<any>(`https://corona.lmao.ninja/v2/countries?sort=${selectVal}`)
  }
}
