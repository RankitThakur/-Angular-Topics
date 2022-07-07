import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lifecyclehook',
  templateUrl: './lifecyclehook.component.html',
  styleUrls: ['./lifecyclehook.component.css']
})
export class LifecyclehookComponent implements OnInit {

  ngOnInit(): void {
    console.log(" Call ngoninit")
  }
    // ngOnChanges(changes:SimpleChanges) {
    // console.log(changes)

  // }
  ngDoCheck(){
    console.log("calll ng Do Checks")
  }

  ngAfterContentInit(){
    console.log("call ngAfterContentInits  ")
  }

  ngAfterContentCheck(){
    console.log("hello parent")
  }

  constructor() {
  console.log("hello parent") 
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewCheck")
  }
  ngOndistroy(){
  console.log("ngAfterViewCheck")
  }
}


