import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create a input binding', () => 
  {
    expect(component.myInput).toBe('rankit')
  })
  it("should data is true", () => {
    expect(component.myInput).toBeTruthy()
  })

});

