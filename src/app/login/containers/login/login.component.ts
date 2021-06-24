import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private authenticationService: AuthenticationService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    const emailValue = this.form.get('email').value;
    const passwordValue = this.form.get('password').value;

    this.authenticationService.login(emailValue, passwordValue);
  }
}
