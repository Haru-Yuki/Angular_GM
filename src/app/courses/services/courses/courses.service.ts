import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import {debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {Course} from '../../../core/models/course';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {CoursesApiService} from '../../../core/services/services-api/courses-api/courses-api.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private router: Router,
              private coursesAPIService: CoursesApiService) { }

  private courses: Array<Course> = [];

  getCourses(): Observable<Array<Course>> {
    return this.coursesAPIService.getCourses();
  }

  getCoursesLoadMore(count: number): Observable<Array<Course>> {
    return this.coursesAPIService.getCoursesLoadMore(count);
  }

  addCourse(formValue: Course): void {
    this.coursesAPIService.addCourse(formValue);
    this.router.navigate(['/courses']);
  }

  getCourse(id: number): Course {
    return this.courses.find(course => course.id === id);
  }

  editCourse(id: number): void {
    this.router.navigate([`/courses/${id}`]);
  }

  deleteCourse(id: number): void {
    this.coursesAPIService.deleteCourse(id);
    this.getCoursesLoadMore(5);
  }

  searchCourses(searchValue: string): Observable<Array<Course>> {
    return this.coursesAPIService.searchCourses(searchValue);
  }

  getCoursesAsArray(searchValue?: string): Observable<Array<Course>> {
    return this.coursesAPIService.getCourses(searchValue || null);
  }
}
