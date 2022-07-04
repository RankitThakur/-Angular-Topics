import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product = [
  {name:"shriffle" , id : "01" , Country: " ind"},
  {name:"shriffle2.0" , id : "02" , Country: "aus "},
  {name:"shriffle3.0" , id : "03" , Country: "nuz "}]
}
