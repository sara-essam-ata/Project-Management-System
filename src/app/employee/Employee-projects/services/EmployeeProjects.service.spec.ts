/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeeProjectsService } from './EmployeeProjects.service';

describe('Service: Projects', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeProjectsService]
    });
  });

  it('should ...', inject([EmployeeProjectsService], (service: EmployeeProjectsService) => {
    expect(service).toBeTruthy();
  }));
});
