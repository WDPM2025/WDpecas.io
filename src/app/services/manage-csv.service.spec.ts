import { TestBed } from '@angular/core/testing';

import { ManageCSVService } from './manage-csv.service';

describe('ManageCSVService', () => {
  let service: ManageCSVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageCSVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
