import { Component, OnInit, Input, SimpleChange,OnChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() myInput: any;
  @Input() myInput2: any;

  ngOnChanges (changes: SimpleChange){
    console.log(SimpleChange)
  }

  ngOnInit(): void {
  }

}
