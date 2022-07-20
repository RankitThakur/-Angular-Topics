import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
  style1 = "px";
  finalClass = {
    class1: false,
    class2: false,
    calss3: true
  }

  constructor() { }

  ngOnInit(): void {
  }


}

