import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpServiceService } from '../services/http-service.service';
@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  user$:Observable<any>

  constructor(private httpService: HttpServiceService){ 
    this.user$ = this.httpService.students()
    console.log(this.user$);
  }

  ngOnInit(): void {
  }
}
