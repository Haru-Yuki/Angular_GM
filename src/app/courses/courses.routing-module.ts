import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {CoursesComponent} from './containers/courses/courses.component';
import {CourseComponent} from './containers/course/course.component';
import {AuthGuardService} from '../core/services/auth-guard/auth-guard.service';

const routes: Route[] = [
  {
    path: '',
    component: CoursesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'new',
    component: CourseComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: ':id',
    component: CourseComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
