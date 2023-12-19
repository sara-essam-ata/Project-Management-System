import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRestPasswordComponent } from './request-rest-password.component';

describe('RequestRestPasswordComponent', () => {
  let component: RequestRestPasswordComponent;
  let fixture: ComponentFixture<RequestRestPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestRestPasswordComponent]
    });
    fixture = TestBed.createComponent(RequestRestPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
