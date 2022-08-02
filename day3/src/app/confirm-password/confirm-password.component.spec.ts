import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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

  it('should create', () => {
    expect( component ).toBeTruthy();
  });
});
