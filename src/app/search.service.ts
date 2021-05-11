import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserComponent } from "./user/user.component";
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  //fetching user
  getUsers(val: any): Observable<any> {
    return this.http.get<any>(`https://api.github.com/search/users?q=${val}`);
  }

  //fetching repositories
  getRepository(val: any): Observable<any> {
    return this.http.get<any>(`https://api.github.com/search/repositories?q=${val}`);
  }

  getUserDetails(login: any) {
    //return this.http.get<any>(`https://api.github.com/users/${login}`)
    return this.http.get<any>(`https://api.github.com/users/${login}`)
  }
  getRepoDetails(name: any, repository: any,) {
    return this.http.get<any>(`https://api.github.com/repos/${repository}/${name}`)
  }

}
