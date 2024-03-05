import { TestBed } from '@angular/core/testing';

import { SClientesService } from './sclientes.service';

describe('SClientesService', () => {
  let service: SClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
