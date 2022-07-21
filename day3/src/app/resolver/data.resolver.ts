import { Injectable } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<boolean> {
  constructor(private data:HttpServiceService) { 

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let data2 =  this.data.students();
    return data2

  }

}
