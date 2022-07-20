import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  @Input() nameData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
