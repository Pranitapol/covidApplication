//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from '../search.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private searchService: SearchService,private route:Router) {

  }
  users: any;
  repos: any;
  totalRecords: number = 0;
  page: number = 1;

  getUser(val: any, selectval: any) {
//if user is selected
    if (selectval == 'user') {
      this.searchService.getUsers(val).subscribe(data => {
        this.users = data.items,
          console.log(data),
          this.totalRecords = data.items.length;
      })
    }
//if repository is selected
    else {
      this.searchService.getRepository(val).subscribe(data => {
        this.repos = data.items,
          console.log(data),
          this.totalRecords = data.items.length;
      })
    }


  }
  userName:any;
repository:any;
  ngOnInit(): void {
  }
  onSelect(userName:any){
    this.route.navigate(['/profile',userName]);
  }
  selectRepos(user:any,repository:any,){
    this.route.navigate(['/repo',user,repository,]);
  }
}
