import { Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Component, EventEmitter, OnInit, } from '@angular/core';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.css']
})
export class TemplateformsComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<any>();

  yourName: any = "";
  passWord: any = "";
  lastName: any = "";
  mobileNum: any = "";


  constructor() { }
  ngOnInit(): void {
  }
  formSubmit(val:any){
    let data = val.value
    this.yourName = data.yourname
    this.passWord = data.password
    this.lastName = data.lastname
    this.mobileNum = data.number
  }

  
}
