import { Component, OnInit } from '@angular/core';

import { SubjectService } from 'src/app/services/subject.service';
@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  userData: any = "";

  constructor(private user: SubjectService) { 
    this.user.userName.subscribe(res => {
      this.userData= res;
    })
  }

  getData(id: any){
    console.log(id.value);
    this.userData = id.value;
    this.user.userName.next(id.value); 
  }

  ngOnInit(): void {
  }

}
