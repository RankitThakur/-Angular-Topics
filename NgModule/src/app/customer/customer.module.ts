import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';
import { SubmitComponent } from './submit/submit.component';



@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    RegistrationComponent,
    SubmitComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
  LoginComponent,
  LogoutComponent,
  RegistrationComponent,
  SubmitComponent


  ]
})
export class CustomerModule { }
