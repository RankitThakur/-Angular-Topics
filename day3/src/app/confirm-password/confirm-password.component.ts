import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators ,FormControl,ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})
export class ConfirmPasswordComponent implements OnInit {
  registerForm!: FormGroup;
  submitted: boolean = false;
 ​
  constructor(private fb: FormBuilder) {
  }
 ​
  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        email: ["",Validators.required],
        password: ["",Validators.required],
        confirmPassword: ["",Validators.required]
      },
      {
        validator: this.ConfirmPasswordValidator("password", "confirmPassword")
      }
    );

   }
   ​ConfirmPasswordValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      let control = formGroup.controls[controlName];
      let matchingControl = formGroup.controls[matchingControlName]
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmPasswordValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmPasswordValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
      
    };
  }
 

onSubmit() {
  this.submitted = true;
}
}
 
