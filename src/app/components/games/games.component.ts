import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.less']
})
export class GamesComponent implements OnInit {
  searchStr='';
  searchType='';

  filterItems=[
    {
      value:'action', 
      checked: false
    } ,
    {
      value:'adventure', 
      checked: false
    } ,
    {
      value:'indie', 
      checked: false
    } ,
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
