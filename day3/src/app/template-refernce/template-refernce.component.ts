import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-refernce',
  templateUrl: './template-refernce.component.html',
  styleUrls: ['./template-refernce.component.css']
})
export class TemplateRefernceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  username = ""
  getName(my:any){
   this.username = my.value
  }
}
