import { TestBed } from '@angular/core/testing';

import { Admin2Guard } from './admin2.guard';

describe('Admin2Guard', () => {
  let guard: Admin2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Admin2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
