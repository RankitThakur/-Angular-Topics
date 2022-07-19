import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPerentComponent } from './input-perent.component';

describe('InputPerentComponent', () => {
  let component: InputPerentComponent;
  let fixture: ComponentFixture<InputPerentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPerentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPerentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
