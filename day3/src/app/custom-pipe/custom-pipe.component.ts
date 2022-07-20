import { Component, OnInit } from '@angular/core';
// import { CustemPipePipe } from '../custom-pipe.pipe';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  constructor() { } 
  ngOnInit(): void { 
  } 
  nameSearch: any = '' 
  students: any[] = [ 
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
  ] 
  addpro(add:any){ 
    this.students.push({ 
      ID: '#', 
      Name:add.value, 
      DOB: '12/8/1988',  
      Gender: 'Male',  
      CourseFee: 1234 
    }) 
  } 
}
