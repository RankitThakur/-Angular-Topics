import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route } from '@angular/router';
import { __param } from 'tslib';
@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent implements OnInit {
  name: any = ""
  userid: any = ""
  constructor(private Route: ActivatedRoute) { }

  ngOnInit(): void {
    this.Route.params.subscribe(__param =>{
      console.log(__param);
      this.name = __param['name'];
    })
    this.Route.queryParams.subscribe(__param =>{
      this.name = __param['name'];
      this.userid = __param['userId']
    })
  }

}
