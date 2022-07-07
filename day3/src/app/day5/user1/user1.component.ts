import { Component, OnInit } from '@angular/core';
import { MynewserviceService } from '../../mynewservice.service';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {

  constructor(private _mynewservice:MynewserviceService) { }

  ngOnInit(): void {
  }
  user = ""
  btn2(){
 this.user = this._mynewservice.username
 console.log(this.user)
  }

}
