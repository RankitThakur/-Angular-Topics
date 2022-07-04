import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showFun2:boolean = false;
  showFun(){
    this.showFun2 = true;
  }
}
