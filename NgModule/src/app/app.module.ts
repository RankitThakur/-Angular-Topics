import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  { CustomerModule } from './customer/customer.module'
import  { BankformModule } from './bankform/bankform.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    BankformModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
