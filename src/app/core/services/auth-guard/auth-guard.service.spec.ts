import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import {RouterTestingModule} from '@angular/router/testing';

xdescribe('AuthGuardService', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('canActivate', () => {
    it('should return false if not authenticated', () => {
      spyOn(service.auth, 'isAuthenticated').and.returnValue(false);

      expect(service.canActivate()).toBeFalsy();
    });

    it('should return true if authenticated', () => {
      spyOn(service.auth, 'isAuthenticated').and.returnValue(true);

      expect(service.canActivate()).toBeTruthy();
    });
  });
});
