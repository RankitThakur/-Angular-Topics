import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 classObj = {
    class1 : true,
    class2 : false,
    class3 : true
  }

}
