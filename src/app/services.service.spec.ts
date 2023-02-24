import { TestBed } from '@angular/core/testing';

import { serviceservice } from './services.service';

describe('ServicesService', () => {
  let service: serviceservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(serviceservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
