import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseComponent } from './containers/course/course.component';
import { CoursesComponent } from './containers/courses/courses.component';



@NgModule({
  declarations: [
    CourseFormComponent,
    CourseComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
