import { TestBed } from '@angular/core/testing';

import { MynewserviceService } from './mynewservice.service';

describe('MynewserviceService', () => {
  let service: MynewserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MynewserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
