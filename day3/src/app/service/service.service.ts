import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
    add(){
    alert("hello this is MynewserviceService")
  }

  getdata(): any {
    return ['C','C++', 'JAVA', 'Python'];
}


  
}
