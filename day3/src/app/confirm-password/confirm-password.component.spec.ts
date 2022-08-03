import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


import { ConfirmPasswordComponent } from './confirm-password.component';

describe('ConfirmPasswordComponent', () => {
  let component: ConfirmPasswordComponent;
  let fixture: ComponentFixture<ConfirmPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule,ReactiveFormsModule],
      declarations: [ ConfirmPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect( component ).toBeTruthy();
  // });
  it('[check email]- check users correct email address is entered', () => {
    let email = component.registerForm.controls['email'];
    email.setValue('abc@gmail.com')
    expect(email.errors).toBeNull();
  });
  it('[check password]- check users correct password  is entered', () => {
    let password = component.registerForm.controls['password'];
    password.setValue('abc@gmail.com')
    expect(password.errors).toBeNull();
  });
  it('[check confirmPassword]- check users correct confirmPassword and password  is same', () => {
    let confirmPassword = component.registerForm.controls['confirmPassword'];
    confirmPassword.setValue('abc@gmail.com')
    expect(confirmPassword.errors).toBeTruthy();
  });
  it('[check email invalid ]- should check eamil is invalid ', () => {
    let email: any = component.registerForm.controls['email'];
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    expect(email.errors['required']).toBeTruthy();
  });
  it('[submit-from], should check submit from ', () => {
    expect(component.registerForm.invalid).toBeTruthy()
    let submit =fixture.debugElement.query(By.css('button[type = submit]')) 
    expect(submit.nativeElement.disabled).toBeFalsy();

    component.registerForm.controls['email'].setValue('abc@gmail.com');
    component.registerForm.controls['password'].setValue('abc@gmail.com');
    fixture.detectChanges();

  })


});
