import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginServiceService]
    });
  });

  it('should be created', inject([LoginServiceService], (service: LoginServiceService) => {
    expect(service).toBeTruthy();
  }));
});
