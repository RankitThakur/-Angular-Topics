import { Component, OnInit, SimpleChange } from '@angular/core';
import { SubjectService } from 'src/app/service/subject.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
  userData:any = "";
  constructor(private user:SubjectService) { 
    this.user.userName.subscribe(res => {
      this.userData= res;
    })

  }
  getData(id:any){
    console.log(id.value);
    this.userData = id.value;
    this.user.userName.next(id.value);

    
  }
  ngOnInit(): void {

  }
  ngOnchange(changes: SimpleChange){
    console.log(changes);

  }

}
