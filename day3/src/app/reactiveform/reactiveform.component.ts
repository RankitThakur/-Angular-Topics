import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder} from '@angular/forms';

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
      passWord: ['',[Validators.required, Validators.minLength(5)]],
      lastName: ['',Validators.required],
      number: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]]
    })

  }
  
  yourName:string = ''
  passWord:any = ''
  lastName:string = ''
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
