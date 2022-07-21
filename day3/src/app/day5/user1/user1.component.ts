import { Component, OnInit } from '@angular/core';

import { MynewserviceService } from 'src/app/services/mynewservice.service';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {

  constructor(private _mynewservice:MynewserviceService) { }

  ngOnInit(): void {
  }

  }

