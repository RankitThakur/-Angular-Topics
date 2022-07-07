import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotefoundComponent } from './page-notefound.component';

describe('PageNotefoundComponent', () => {
  let component: PageNotefoundComponent;
  let fixture: ComponentFixture<PageNotefoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotefoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotefoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
