import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassingvalueComponent } from './passingvalue.component';

describe('PassingvalueComponent', () => {
  let component: PassingvalueComponent;
  let fixture: ComponentFixture<PassingvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassingvalueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassingvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
