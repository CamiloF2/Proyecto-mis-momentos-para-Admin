import { TestBed } from '@angular/core/testing';

import { SreservasService } from './sreservas.service';

describe('SreservasService', () => {
  let service: SreservasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SreservasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
