import { Component, OnInit } from '@angular/core';
import {  Observable, Subscription, timeInterval } from 'rxjs';

@Component({
  selector: 'app-async-pipe-example',
  templateUrl: './async-pipe-example.component.html',
  styleUrls: ['./async-pipe-example.component.css']
})
export class AsyncPipeExampleComponent implements OnInit {
  time!: string 
  timeSubscription!: Subscription
  time$!: Observable<any>

  constructor() { }

  ngOnInit(): void {
    // this.time$ = timeInterval();

  }

}
function Interval(): Observable<any> {
  throw new Error('Function not implemented.');
}

