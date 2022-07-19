import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalcompComponent } from './finalcomp.component';

describe('FinalcompComponent', () => {
  let component: FinalcompComponent;
  let fixture: ComponentFixture<FinalcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
