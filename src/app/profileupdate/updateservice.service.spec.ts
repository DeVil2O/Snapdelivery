import { TestBed, inject } from '@angular/core/testing';

import { UpdateserviceService } from './updateservice.service';

describe('UpdateserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateserviceService]
    });
  });

  it('should be created', inject([UpdateserviceService], (service: UpdateserviceService) => {
    expect(service).toBeTruthy();
  }));
});
