import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.css']
})
export class TemplateformsComponent implements OnInit {

  constructor() { }
  yourName:any = ""
  passWord:any = ""
  lastName:any = ""

  ngOnInit(): void {
  }
  formSubmit(val:any){
    let data = val.value
    this.yourName = data.yourname
    this.passWord = data.password
    this.lastName = data.lastname
  }

  
}
