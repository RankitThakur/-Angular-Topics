import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpPutAndPostdataComponent } from '../http-put-and-postdata/http-put-and-postdata.component';
import { HttpDemoComponent } from './http-demo.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HttpPutAndPostdataComponent,
    HttpDemoComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
     
  ],
})
export class HttpModule {
  constructor(){
    console.log("http module")
  }
 }
