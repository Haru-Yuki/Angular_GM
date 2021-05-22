import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router) { }

  login(email: string): void {
    localStorage.setItem('email', email);
    localStorage.setItem('token', this._generateLoginToken(email));

    this.router.navigate(['./']);
  }

  logout(): void {
    localStorage.removeItem('email');
    localStorage.removeItem('token');

    console.log('Logged out ' + localStorage.getItem('email'));

    this.router.navigate(['login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('email') && !!localStorage.getItem('token');
  }

  getUserInfo(): string {
    const email = localStorage.getItem('email');

    return email && email.substr(0, email.indexOf('@'));
  }

  private _generateLoginToken(value: string): string {
    return window.btoa(value);
  }
}
