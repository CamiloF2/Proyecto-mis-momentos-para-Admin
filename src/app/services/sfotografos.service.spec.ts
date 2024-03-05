import { TestBed } from '@angular/core/testing';

import { SFotografosService } from './sfotografos.service';

describe('SFotografosService', () => {
  let service: SFotografosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SFotografosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
