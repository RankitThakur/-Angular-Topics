import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passingvalue',
  templateUrl: './passingvalue.component.html',
  styleUrls: ['./passingvalue.component.css']
})
export class PassingvalueComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }
  msgDrop = ""
  // myevent(value:string){
  //   this.msgDrop = value
  // }

  myevent(event:any){
    this.msgDrop =  (event.target as HTMLInputElement).value;

  }

}
