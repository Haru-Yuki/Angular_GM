import {Component, DoCheck, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../login/services/authentication/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  isAuthenticated: boolean;
  loggedInEmail: string;

  constructor(private authenticationService: AuthenticationService,
              public router: Router) { }

  ngOnInit(): void {
    this.isAuthenticated = this.authenticationService.isAuthenticated();
    this.loggedInEmail = this.authenticationService.getUserInfo();
  }

  ngDoCheck(): void {
    this.isAuthenticated = this.authenticationService.isAuthenticated();
    this.loggedInEmail = this.authenticationService.getUserInfo();
  }

  handleLogout(): void {
    this.authenticationService.logout();
  }
}
