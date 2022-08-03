import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecyclehook',
  templateUrl: './lifecyclehook.component.html',
  styleUrls: ['./lifecyclehook.component.css']
})
export class LifecyclehookComponent implements OnInit, OnChanges {
  name: string = 'Test';

  constructor() {
    console.log("constructor") ;
  }
  
  ngOnInit(): void {
    console.log(" Call ngoninit");
    console.log("Name is", this.name);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes");
    if(changes['username']){
      this.name = "rankit:" + this.name + 'rANKIT'
    }
  }

  ngDoCheck(){
    console.log("calll ng Do Checks");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewCheck");
  }

  submitCompanyName() {
  this.name = "App"
  }

  ngAfterContentInit(){
    console.log("call ngAfterContentInits");
  }

  ngAfterContentCheck(){
    console.log("ngAfterContentCheck");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }
  
  ngOndistroy(){
  console.log("ngAfterViewCheck");
  }
}


