import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const BASE_URL = 'http://localhost:3004';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationApiService {

  constructor(private httpClient: HttpClient) { }

  login(login: string, password: string): Observable<object> {
    return this.httpClient.post(`${BASE_URL}/auth/login`, {login, password});
  }

  getUserInfo(token: string): Observable<object> {
    return this.httpClient.post(`${BASE_URL}/auth/userinfo`, {token});
  }
}
