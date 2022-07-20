import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  @Input() newData: any
  @Output() close = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

}
