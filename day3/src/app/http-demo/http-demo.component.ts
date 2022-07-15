import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit {

  constructor(private data:HttpServiceService) { }
product:any = {}
image:any = {}
  ngOnInit(): void {
    // this.product = this.data.students
    // this.data.students().subscribe(productData => this.product = productData)
    // this.data.photo().subscribe(imageData => this.image = imageData)

  }
  clickMe(){   
     this.data.photo().subscribe(imageData => this.image = imageData)
  }
  clickData1(){
    this.data.students().subscribe(productData => this.product = productData)


  }

}
