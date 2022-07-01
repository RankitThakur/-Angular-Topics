import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'work';
  subheading = "hello"
  for = "rankit"
////////////////function
  getName(){
    var a = "thakur"
    return a
  }
//////////////object
  obj = {
    name : "rankit",
    id : 24,
  }
///////////array
  arr = ["rankit",12,"thakur"]
//////////////arithmatic opration
  sum=5
  sum2=5
/////////////////link
  link = window.location

}
