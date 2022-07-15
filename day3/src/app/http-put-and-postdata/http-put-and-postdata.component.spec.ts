import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPutAndPostdataComponent } from './http-put-and-postdata.component';

describe('HttpPutAndPostdataComponent', () => {
  let component: HttpPutAndPostdataComponent;
  let fixture: ComponentFixture<HttpPutAndPostdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpPutAndPostdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpPutAndPostdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
