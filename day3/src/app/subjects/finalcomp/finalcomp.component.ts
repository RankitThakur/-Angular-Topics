import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/service/subject.service';

@Component({
  selector: 'app-finalcomp',
  templateUrl: './finalcomp.component.html',
  styleUrls: ['./finalcomp.component.css']
})
export class FinalcompComponent implements OnInit {

  constructor(private user:SubjectService) { }
  userData:any = "";
  ngOnInit(): void {
    this.user.userName.subscribe(res => {
      this.userData= res;
    })
  }

}
