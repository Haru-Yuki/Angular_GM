import {Component, DoCheck, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, DoCheck {
  id: string;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.id = this.router.url.substr(9);
  }
}
