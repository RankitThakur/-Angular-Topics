import { Component, OnInit } from '@angular/core';

import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
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
