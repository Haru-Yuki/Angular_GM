import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { RouterTestingModule } from '@angular/router/testing';

xdescribe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ]
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    const email = 'dima@gmail.com';

    it('should set email to localStorage', () => {
      // service.login(email);

      expect(localStorage.getItem('email')).toBe(email);
    });

    it('should set token to localStorage', () => {
      // service.login(email);

      expect(localStorage.getItem('token')).toBe(service['_generateLoginToken'](email));
    });
  });

  describe('logout', () => {
    const email = 'dima@gmail.com';

    beforeEach(() => {
      // service.login(email);
    });

    it('should remove email from localStorage', () => {
      service.logout();

      expect(localStorage.getItem('email')).toBe(null);
    });

    it('should remove token from localStorage', () => {
      service.logout();

      expect(localStorage.getItem('token')).toBe(null);
    });
  });
});
