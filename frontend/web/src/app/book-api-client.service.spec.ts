import { TestBed } from '@angular/core/testing';

import { PeopleApiService } from './book-api-client.service';

describe('BookApiClientService', () => {
  let service: PeopleApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
