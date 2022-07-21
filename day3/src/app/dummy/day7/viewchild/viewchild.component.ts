import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {
@Input() name:any
@Output() newEven: EventEmitter<any> = new EventEmitter
  constructor() { }

  ngOnInit(): void {
    this.newEven.emit("helloo")
  }


}
