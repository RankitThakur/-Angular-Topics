import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InputOutputComponent } from './input-output.component';


fdescribe('InputOutputComponent', () => {
  let component: InputOutputComponent;
  let fixture: ComponentFixture<InputOutputComponent>;
  let searchBtn: DebugElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    searchBtn = fixture.debugElement.query(By.css('#name'));

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Setting disables to true enable the submit button', () => {
    fixture.detectChanges();
     expect(searchBtn.nativeElement.disabled).toEqual(false);
  }); 
});
