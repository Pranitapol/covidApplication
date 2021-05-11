import { Component, OnInit } from '@angular/core';
import { SortService } from "../sort.service";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  selectVal: any;
  constructor(private sorting: SortService) { }

  ngOnInit(): void {
  }

  totalRecords: number = 0;
  page: number = 1;
  country: any;

  sortBy(selectVal: any) {
    //sort by country
    if (selectVal == 'country') {
      this.sorting.getByCountry(selectVal).subscribe(data => {
        this.country = data;
        console.log(data);
        this.totalRecords = data.length;
      })
    }
    //sort death ratio
    else if (selectVal == 'death') {
      this.sorting.getByDeath(selectVal).subscribe(data => {
        this.country = data;
        console.log(data);
        this.totalRecords = data.length;
      })
    }
    //sort by  recovered 
    else if (selectVal == 'recovered') {
      this.sorting.getByRecovered(selectVal).subscribe(data => {
        this.country = data;
        console.log(data);
        this.totalRecords = data.length;
      })
    }
    //sort by  one-death-per-person ratio 
    else if (selectVal == 'one-death-per-people') {
      this.sorting.getByOneDeathPerPeople(selectVal).subscribe(data => {
        this.country = data;
        console.log(data);
        this.totalRecords = data.length;
      })
    }
    //sort by one-case-per-people ratio
    else if (selectVal == 'one-case-per-people') {
      this.sorting.getByOneCasePerPeople(selectVal).subscribe(data => {
        this.country = data;
        console.log(data);
        this.totalRecords = data.length;
      })
    }
  }
}
