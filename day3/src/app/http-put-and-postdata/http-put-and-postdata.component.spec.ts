import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FillterPipe } from '../fillter.pipe';

import { HttpPutAndPostdataComponent } from './http-put-and-postdata.component';
describe('HttpPutAndPostdataComponent', () => {
  let component: HttpPutAndPostdataComponent;
  let fixture: ComponentFixture<HttpPutAndPostdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ],
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
