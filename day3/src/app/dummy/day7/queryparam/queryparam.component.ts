import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-queryparam',
  templateUrl: './queryparam.component.html',
  styleUrls: ['./queryparam.component.css']
})
export class QueryparamComponent implements OnInit {

  constructor(private Route:ActivatedRoute) { }

  ngOnInit(): void {
    this.Route.queryParams.subscribe(Params=>{
    this.name = Params['name']
    this.userId = Params['userId']
    console.log(Params)
    })
  }
name:any= " "
userId:any = " "
}
