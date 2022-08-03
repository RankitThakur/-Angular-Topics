import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReactiveformComponent } from './reactiveform.component';

fdescribe('ReactiveformComponent', () => {
  let component: ReactiveformComponent;
  let fixture: ComponentFixture<ReactiveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ ReactiveformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[userName-vaild], should be check user userName is vaild', () => {
    let userName = component.contactForm.controls['userName'];
    userName.setValue("abc");
    expect(userName.errors).not.toBe(null);
  });

  it('[email-vaild], should be check user email is vaild', () => {
    let email = component.contactForm.controls['email'];
    email.setValue("abcc@gmail.com");
    expect(email.errors).toBe(null)
  })

  it('[password-vaild], should be check user password is vaild', () => {
    let password = component.contactForm.controls['passWord'];
    password.setValue("abcc123");
    expect(password.errors).toBe(null)
    
  })

  it('[number-vaild], should be check user number is vaild', () => {
    let number = component.contactForm.controls['number'];
    expect(number.errors).toBeTruthy()
    number.setValue("1234");
  })


});
