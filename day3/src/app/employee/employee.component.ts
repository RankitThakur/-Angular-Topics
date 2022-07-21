import { Component, OnInit ,ViewChild } from '@angular/core';
import { SalaryComponent } from '../salary/salary.component';

import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @ViewChild ( SalaryComponent ) SalaryComponent: any ;

  constructor() { }
  increment(){
    this.SalaryComponent.increment();
      console.log("increment");
    }

  decrement(){
    this.SalaryComponent.decrement();
    console.log("decrement");
  }
  ngOnInit(): void {}
  msgAdd = new ServiceService
  btn(){
    this.msgAdd.add();
  }
}
