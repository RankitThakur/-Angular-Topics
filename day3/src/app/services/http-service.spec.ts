import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { HttpServiceService } from './http-service.service';
describe('getservices', () => {
  let component: HttpServiceService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let getData: any = [
    {
      ID: 'std101', 
      Name: 'Rakesh Rout',
      DOB: '12/8/1988', 
      Gender: 'Male', 
      CourseFee: 1234
    },
    {
      ID: 'std102', 
      Name: 'Radha ',
      DOB: '12/8/1988', 
      Gender: 'Fmale',
      CourseFee: 1234
    },
  ];
  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('httpClient', ['students']);
    component = new HttpServiceService(httpClientSpy);
  });  
  describe('getStudentData', () => {
    it('it should retrieve  all student data', (done) => {
      httpClientSpy.get.and.returnValue(of(getData));
      component.students().subscribe({
        next: (student) =>  {
          expect(student).toEqual(getData);
          done();
        },
        error: () => {
          done.fail;
        } 
      });
    });
  });
});
