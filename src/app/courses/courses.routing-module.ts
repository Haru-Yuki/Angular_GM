import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {CoursesComponent} from './containers/courses/courses.component';
import {CourseComponent} from './containers/course/course.component';

const routes: Route[] = [
  {
    path: '',
    component: CoursesComponent
  },
  {
    path: 'add',
    component: CourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }