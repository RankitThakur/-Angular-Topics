import { Component, } from '@angular/core';
import { SubjectService } from './services/subject.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day3';
  data:any = "rankit";
  live:boolean = false;

  constructor(private sub:SubjectService){
    this.sub.live.subscribe(res =>  {
      this.live = res;
    })
  }

  fun(data1: string){
    console.log(data1)
  }
  
}






