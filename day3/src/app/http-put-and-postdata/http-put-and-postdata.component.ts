import { Component, OnInit } from '@angular/core';

import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-http-put-and-postdata',
  templateUrl: './http-put-and-postdata.component.html',
  styleUrls: ['./http-put-and-postdata.component.css']
})
export class HttpPutAndPostdataComponent implements OnInit {
  nameSearch: any = '';

  constructor(private data: HttpServiceService) { }

  ngOnInit(): void {
  }

  students: any = [
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

  addpro(add: any) {
    this.students.push(
      {
        ID: '#',
        Name:add.value,
        DOB: '12/8/1988', 
        Gender: 'Male', 
        CourseFee: 1234
      }
    ) 
  }

  onSaveProduct() {
    this.data.putData(this.students).subscribe((respones)=> console.log(respones));
  }
}



