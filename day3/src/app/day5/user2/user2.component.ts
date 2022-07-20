import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {
  courses: any = ""

  constructor(private _msgadd: ServiceService) { }

  ngOnInit(): void {
    this.courses = this._msgadd.getdata();
  }

  btn(){
    this._msgadd.add()
  }


}

