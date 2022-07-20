import { Component, OnInit ,HostBinding,HostListener} from '@angular/core';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {
  Salary: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.Salary = this.Salary+500;
  }

  decrement() {
    this.Salary = this.Salary-250;
  }
  
  @HostBinding('style.color') bgColor: any;
  @HostListener('mouseout') onMouseout(){
    this.bgColor = "blue"
  }
}

