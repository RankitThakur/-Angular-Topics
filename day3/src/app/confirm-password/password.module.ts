import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { ConfirmPasswordComponent } from './confirm-password.component';

const data: Routes = [
  {
    path: 'password',
    component: ConfirmPasswordComponent
  }
]

@NgModule({
  declarations: [
  ConfirmPasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(data),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PasswordModule { }
