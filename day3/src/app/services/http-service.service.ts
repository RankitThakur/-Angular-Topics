import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {

  constructor(private Http:HttpClient) { }
  student:any = [
    {
      ID: 'std101', 
      Name: 'Rakesh Rout',
      DOB: '12/8/1988', 
      Gender: 'Male', 
      CourseFee: 1234
    },
    {
      ID: 'std102', 
      Name: 'Radha ',
      DOB: '12/8/1988', 
      Gender: 'Fmale',
      CourseFee: 1234
    },
    {
      ID: 'std103', 
      Name: 'Ram Singh',
      DOB: '12/8/1988', 
      Gender: 'Male', 
      CourseFee: 1234
    },
    {
      ID: 'std104', 
      Name: 'Soni Rout',
      DOB: '12/8/1988',
      Gender: 'Fmale', 
      CourseFee: 1234
    },
    {
      ID: 'std105', 
      Name: 'rohan Rout',
      DOB: '12/8/1988', 
      Gender: 'Male', 
      CourseFee: 1234
    },
    {
      ID: 'std106', 
      Name: 'geeta ',
      DOB: '12/8/1988', 
      Gender: 'Fmale',
      CourseFee: 1234
    },
    {
      ID: 'std107', 
      Name: 'raju Singh',
      DOB: '12/8/1988', 
      Gender: 'Male', 
      CourseFee: 1234
    },
    {
      ID: 'std108', 
      Name: 'shubham Rout',
      DOB: '12/8/1988', 
      Gender: 'male', 
      CourseFee: 1234
    },
  ]
  
  students():Observable<any>{
    return this.Http.get('https://jsonplaceholder.typicode.com/users')
  }

  photo():Observable<any>{
    return this.Http.get('https://jsonplaceholder.typicode.com/todos')
  }
  
  putData(  students:any = []
    ):Observable<any>{

    return this.Http.put('gs://userdata-bf904.appspot.com/products.Json',students )
  }

}


