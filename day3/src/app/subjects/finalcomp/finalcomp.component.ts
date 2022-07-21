import { Component, OnInit } from '@angular/core';

import { SubjectService } from 'src/app/services/subject.service';
@Component({
  selector: 'app-finalcomp',
  templateUrl: './finalcomp.component.html',
  styleUrls: ['./finalcomp.component.css']
})
export class FinalcompComponent implements OnInit {
  userData: any = "";

  constructor(private user: SubjectService) { }

  ngOnInit(): void {
    this.user.userName.subscribe(res => {
      this.userData= res;
    })
  }

}
