import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import {  SearchService} from "../search.service";
@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {
name:any;
repos:any;
repository:any;
  constructor(private activatedRoute:ActivatedRoute,private search:SearchService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.name=params.get('name');
      this.repository=params.get('repository');
      this.search.getRepoDetails(this.name,this.repository).subscribe(data=>
        {
          this.repos=data;
          console.log(this.repos);
        })
    })
  }



}
