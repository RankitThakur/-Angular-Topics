import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  live = new Subject<boolean>()
  userName = new BehaviorSubject<any>("Rankit")
  constructor() { }
}
