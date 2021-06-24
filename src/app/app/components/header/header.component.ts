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
  userInfo: string;

  constructor(private authenticationService: AuthenticationService,
              public router: Router) { }

  ngOnInit(): void {
    this.authenticationService.setUserInfo();
    this.isAuthenticated = this.authenticationService.isAuthenticated();
  }

  ngDoCheck(): void {
    this.isAuthenticated = this.authenticationService.isAuthenticated();

    this.userInfo = this.authenticationService.userInfo;
  }

  handleLogout(): void {
    this.authenticationService.logout();
  }
}
