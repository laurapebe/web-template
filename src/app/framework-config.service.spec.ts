import { TestBed } from '@angular/core/testing';

import { FrameworkConfigService } from '../frmwrk/services/framework-config.service';

describe('FrameworkConfigService', () => {
  let service: FrameworkConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrameworkConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
