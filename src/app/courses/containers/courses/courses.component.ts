import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../../core/models/course';
import {CoursesService} from '../../services/courses/courses.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

const DEFAULT_COUNT = 5;

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesComponent implements OnInit {
  count = DEFAULT_COUNT;
  coursesAsArray: Array<Course>;
  courses: Observable<Array<Course>>;
  isCourseFind: boolean;
  isSearched: boolean;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.setCoursesAsArray();

    this.courses = this.coursesService.getCoursesLoadMore(DEFAULT_COUNT);
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
    this.courses = this.coursesService.getCoursesLoadMore(this.count += 5);
  }

  handleSearch(value: string): void {
    if (value) {
      this.setCoursesAsArray(value);
      this.courses = this.coursesService.searchCourses(value);
      this.isSearched = true;
    }
  }

  handleReload(): void {
    window.location.reload();
  }

  private setCoursesAsArray(searchValue?: string): void {
    this.coursesService.getCoursesAsArray(searchValue || null).pipe(
      tap((data) => this.coursesAsArray = data),
      tap(() => this.setIsCourseFind())
    ).subscribe();
  }

  private setIsCourseFind(): void {
    this.isCourseFind = !(this.coursesAsArray && this.coursesAsArray.length === 0);
  }
}
