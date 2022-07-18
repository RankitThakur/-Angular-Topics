import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
interface user  {
  id:string;
  name: any;
}

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<boolean> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(true);
  }
}
