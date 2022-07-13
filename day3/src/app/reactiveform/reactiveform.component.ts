import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder, AbstractControl} from '@angular/forms';
import { min } from 'rxjs';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  contactForm:any = FormGroup
  constructor(private fb:FormBuilder) { 
    this.contactForm = fb.group({
      userName: ['',[Validators.required, Validators.minLength(5)]],
      passWord: ['',[Validators.required,]],
      confirmPassword: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['',Validators.required],
      number: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]],
      email: ['',[Validators.required,Validators. email,  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ]]
    },
    {
      Validators: this.MustMatch("passWord","confirmPassword")
    })
  }
  get f() { return this.contactForm.controls; } 
  MustMatch(controlName:any,matchingControlName:string){
      return(formGroup:FormGroup)=>{
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors["MustMatch"]){
          return;
        }
        if(control.value !== matchingControl.value){
          matchingControl.setErrors({ MustMatch:true  })       
         }
        else{
          matchingControl.setErrors(null)       

        }

      }
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
    this.confirmPassword = this.contactForm.get("confirmPassWord").value
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
