/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TheaterService } from './theater.service';

describe('TheaterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TheaterService]
    });
  });

  it('should ...', inject([TheaterService], (service: TheaterService) => {
    expect(service).toBeTruthy();
  }));
});
