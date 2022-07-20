import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-lifecyclehook',
  templateUrl: './lifecyclehook.component.html',
  styleUrls: ['./lifecyclehook.component.css']
})
export class LifecyclehookComponent implements OnInit, OnChanges {
  @Input() name:any = "";

  constructor() {
    console.log("constructor") ;
  }
  
  ngOnInit(): void {
    console.log(" Call ngoninit");
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes");
  }

  ngDoCheck(){
    console.log("calll ng Do Checks");
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

  ngAfterViewChecked(){
    console.log("ngAfterViewCheck");
  }
  
  ngOndistroy(){
  console.log("ngAfterViewCheck");
  }
}


