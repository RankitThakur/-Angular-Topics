import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // getName(){
  //   alert("hello angular")
  appStatus:boolean = false;
  status1 = "100px";
  status2 = "ofline"
  active:boolean = true;
  classObj = {
    class1 : true,
    class2 : false,
    class3 : true
  }


  }
