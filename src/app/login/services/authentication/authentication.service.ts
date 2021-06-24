import {ChangeDetectorRef, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationApiService} from '../../../core/services/services-api/authentication-api/authentication-api.service';
import {tap} from 'rxjs/operators';
import {Token} from '../../../core/models/token';
import {User} from '../../../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userInfo: string;

  constructor(private router: Router,
              private authApiService: AuthenticationApiService) { }

  login(email: string, password: string): void {
    this.authApiService.login(email, password).pipe(
      tap((data: Token) => {
        if (data.token) {
          localStorage.setItem('email', email);
          localStorage.setItem('token', data.token);

          this.setUserInfo();
          this.router.navigate(['/courses']);
        }
      })
    ).subscribe();
  }

  logout(): void {
    localStorage.removeItem('email');
    localStorage.removeItem('token');

    this.router.navigate(['login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('email') && !!localStorage.getItem('token');
  }

  setUserInfo(): void {
    const token = localStorage.getItem('token');

    this.authApiService.getUserInfo(token).pipe(
      tap((data: User) => {
        if (data) {
           this.userInfo = `${data.name.first} ${data.name.last}`;
        }
      })
    ).subscribe();
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}
