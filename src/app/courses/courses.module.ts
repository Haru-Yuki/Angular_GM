import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseComponent } from './containers/course/course.component';
import { CoursesComponent } from './containers/courses/courses.component';
import { CoursesRoutingModule } from './courses.routing-module';
import { CoursePostComponent } from './components/course-post/course-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './containers/search/search.component';
import { FreshPostDirective } from './directives/fresh-post.directive';

@NgModule({
  declarations: [
    CourseFormComponent,
    CourseComponent,
    CoursesComponent,
    CoursePostComponent,
    SearchComponent,
    FreshPostDirective
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
