import { Component, OnInit} from '@angular/core';
import { ActivatedRoute,Data } from '@angular/router';

@Component({
  selector: 'app-static-data',
  templateUrl: './static-data.component.html',
  styleUrls: ['./static-data.component.css']
})
export class StaticDataComponent implements OnInit {

  constructor(private Route: ActivatedRoute) { }

  ngOnInit(): void {
    this.Route.data.subscribe((name:Data)=>{
      console.log(name)
      })

      
  }
 

}
