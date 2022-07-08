import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chlidroute2Component } from './chlidroute2.component';

describe('Chlidroute2Component', () => {
  let component: Chlidroute2Component;
  let fixture: ComponentFixture<Chlidroute2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chlidroute2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chlidroute2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
