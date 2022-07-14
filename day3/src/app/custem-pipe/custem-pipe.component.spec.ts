import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustemPipeComponent } from './custem-pipe.component';

describe('CustemPipeComponent', () => {
  let component: CustemPipeComponent;
  let fixture: ComponentFixture<CustemPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustemPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustemPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
