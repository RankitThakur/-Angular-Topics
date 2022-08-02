import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReactiveformComponent } from './reactiveform.component';

describe('ReactiveformComponent', () => {
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
});
