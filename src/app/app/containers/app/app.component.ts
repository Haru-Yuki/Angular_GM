import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-GM';

  constructor(
    public router: Router,
    private translateService: TranslateService
    ) { }

  ngOnInit(): void {
    this.translateService.use(environment.defaultLocale);
  }
}
