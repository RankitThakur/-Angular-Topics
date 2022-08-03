import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-perent',
  templateUrl: './input-perent.component.html',
  styleUrls: ['./input-perent.component.css']
})
export class InputPerentComponent implements OnInit {
  child:string = "rankit";
  newchlid: boolean = false;
  hasEnabled: boolean = true
  constructor() { }

  myFunction(val: any){
    this.child = val
  }

  myFun(val: any){
    val = true;
    this.newchlid = val;
    }
  ngOnInit(): void {
  }
}
