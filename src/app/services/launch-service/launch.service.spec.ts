import { TestBed } from '@angular/core/testing';

import { UpcomingLaunchService } from './launch.service';

describe('UpcomingLaunchService', () => {
  let service: UpcomingLaunchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpcomingLaunchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
