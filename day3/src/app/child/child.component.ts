import { Component, OnInit, Input, SimpleChange,} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  dataName: string = "rankit";

  constructor() { }
  @Input() myInput: any = "rankit"
  @Input() myInput2: any;
  ngOnChanges (changes: SimpleChange){
    console.log(SimpleChange)
  }

  ngOnInit(): void {
  }

}
