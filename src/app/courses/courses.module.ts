import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseComponent } from './containers/course/course.component';
import { CoursesComponent } from './containers/courses/courses.component';
import { CoursesRoutingModule } from './courses.routing-module';
import { CoursePostComponent } from './components/course-post/course-post.component';



@NgModule({
  declarations: [
    CourseFormComponent,
    CourseComponent,
    CoursesComponent,
    CoursePostComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
