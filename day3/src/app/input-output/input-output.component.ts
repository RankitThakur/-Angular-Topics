import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {
  @Input() myInput: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  search(name: string, email: string) {
   console.log(name + email)
  }
}
