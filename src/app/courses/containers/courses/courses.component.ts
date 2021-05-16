import { Component, OnInit, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../../core/models/course';
import {CoursesService} from '../../services/courses/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent implements OnInit, DoCheck {
  courses: Array<Course> = [];
  searchCourseValue: string;
  isCourseFind: boolean;
  isCourseFindSearch = true;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  ngDoCheck(): void {
    this.courses = this.coursesService.getCourses();
    this.isCourseFind = !(this.courses && this.courses.length === 0 || !this.isCourseFindSearch);
  }

  handleDelete(id: number): void {
    if (confirm('Do you want to delete course?')) {
      this.coursesService.deleteCourse(id);
    }
  }

  handleEdit(id: number): void {
      this.coursesService.editCourse(id);
  }

  handleLoadMore(): void {
    console.log('Loading more courses...');
  }

  handleSearch(value: string): void {
    this.searchCourseValue = value;

    this.isCourseFindSearch = this.courses.filter(courses => courses.title.includes(value)).length !== 0;
  }
}
