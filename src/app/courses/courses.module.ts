import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseComponent } from './containers/course/course.component';
import { CoursesComponent } from './containers/courses/courses.component';
import { CoursesRoutingModule } from './courses.routing-module';
import { CoursePostComponent } from './components/course-post/course-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './containers/search/search.component';
import { FreshPostDirective } from './directives/fresh-post/fresh-post.directive';
import { TimePipe } from './pipes/time/time.pipe';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';

@NgModule({
  declarations: [
    CourseFormComponent,
    CourseComponent,
    CoursesComponent,
    CoursePostComponent,
    SearchComponent,
    FreshPostDirective,
    TimePipe,
    OrderByPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe
  ]
})
export class CoursesModule { }
