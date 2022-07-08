import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chlidroute1Component } from './chlidroute1.component';

describe('Chlidroute1Component', () => {
  let component: Chlidroute1Component;
  let fixture: ComponentFixture<Chlidroute1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chlidroute1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chlidroute1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
