import { TestBed } from '@angular/core/testing';

import { ApiTrendingService } from './api-trending.service';

describe('ApiTrendingService', () => {
  let service: ApiTrendingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTrendingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
