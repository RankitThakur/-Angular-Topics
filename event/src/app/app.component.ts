import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mpapp3';
  hello = "calling function"
  getName(hello:string){
   alert(hello)
  }
  myEvent(para:string){
    alert(para)
  }
}
