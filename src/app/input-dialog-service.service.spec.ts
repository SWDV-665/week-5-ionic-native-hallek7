import { TestBed } from '@angular/core/testing';
import { InputDialogServiceServicesPage } from './input-dialog-service.service';

describe('InputDialogServiceService', () => {
  let service: InputDialogServiceServicesPage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputDialogServiceServicesPage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
