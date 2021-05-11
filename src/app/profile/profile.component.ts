import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from "@angular/router";
import { SearchService } from "../search.service";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute,private userService:SearchService) { }
public login:any;
//params:any;
details:any;
  ngOnInit(): void {
    
    this.route.paramMap.subscribe((params:ParamMap)=>{

      this.login=params.get('login');
      //console.log(this.login)
      this.userService.getUserDetails(this.login).subscribe(data=>{
        this.details=data;
        console.log(this.details);
      })
    })
  
  }

  
}
