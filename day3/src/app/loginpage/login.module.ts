import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { LoginpageComponent } from './loginpage.component';

const routes: Routes = [
  { 
    path: "login", component: LoginpageComponent
  }
]

@NgModule({
  declarations: [
    LoginpageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class LoginModule { }
