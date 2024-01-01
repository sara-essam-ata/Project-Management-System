/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeeTaskService } from './employee-task.service';

describe('Service: EmployeeTask', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeTaskService]
    });
  });

  it('should ...', inject([EmployeeTaskService], (service: EmployeeTaskService) => {
    expect(service).toBeTruthy();
  }));
});
