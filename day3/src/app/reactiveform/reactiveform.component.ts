import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder,} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  submitted: boolean = false;
  contactForm:any = FormGroup
  constructor(private fb:FormBuilder) { 
    this.contactForm = this.fb.group({
      userName: ['',[Validators.required, Validators.minLength(5)]],
      passWord: ['',[Validators.required,]],
      confirmPassword: ['', [Validators.required]],
      lastName: ['',Validators.required],
      number: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]],
      email: ['',[Validators.required,Validators. email,  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ]]
    })
    {
      Validators: this.ConfirmPasswordValidator("passWord","confirmPassword")
    }
  }
  get f() { return this.contactForm.controls; } 
  ConfirmPasswordValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      let control = formGroup.controls[controlName];
      let matchingControl = formGroup.controls[matchingControlName]
      if (
        matchingControl.errors && !matchingControl.errors['confirmPasswordValidator']
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

  yourName:string = ''
  passWord:any = ''
  lastName:string = ''
  email:any = ""
  confirmPassword:any = ""
  //   formSubmit(val:any){
  //   let data = val.value
  //   this.yourName = data.userName
  //   this.passWord = data.passWord
  //   this.lastName = data.lastName
  // }
/////get value mathed using/////
  postData(){
    this.yourName = this.contactForm.get("userName").value
    this.passWord = this.contactForm.get("passWord").value
    this.lastName = this.contactForm.get("lastName").value
    this.email = this.contactForm.get("email").value
    this.confirmPassword = this.contactForm.get("confirmPassword").value
  }
  ngOnInit(): void {
  }

  setData(){
    
    this.contactForm.setValue({
    "userName": "rankit",
    "passWord": 4444444,
    "lastName": "thakur",
    "number": 98876554
    })

  }
  patchData(){
    this.contactForm.patchValue({
    "userName": "rankit",
    "passWord": 4444444,
    })
  }
  resetData(){
    this.contactForm.reset()
  }

}
