import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './containers/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { AppRoutingModule } from './app-routing.module';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import {LoginModule} from '../login/login.module';
import { Page404Component } from './components/page404/page404.component';
import {CourseComponent} from '../courses/containers/course/course.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    BreadcrumbsComponent,
    Page404Component
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LoginModule
    ],
  providers: [CourseComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
