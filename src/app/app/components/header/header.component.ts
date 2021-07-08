import {Component, DoCheck, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../login/services/authentication/authentication.service';
import {Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  isAuthenticated: boolean;
  userInfo: string;

  constructor(private authenticationService: AuthenticationService,
              public router: Router,
              public translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.addLangs(environment.locales);
    this.translate.setDefaultLang(environment.defaultLocale);

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
