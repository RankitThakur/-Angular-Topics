import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  style1 = "px"
  finalClass = {
    class1 : false,
    class2 : false,
    calss3 : true
  }


}

