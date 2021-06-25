import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import {debounceTime, distinctUntilChanged, switchMap, take, tap} from 'rxjs/operators';
import {Course} from '../../../core/models/course';
import {Form, FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {CoursesApiService} from '../../../core/services/services-api/courses-api/courses-api.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  countOfCourses: number;

  constructor(private router: Router,
              private coursesAPIService: CoursesApiService) { }

  private courses: Array<Course> = [];

  getCourses(): Observable<Array<Course>> {
    return this.coursesAPIService.getCourses();
  }

  getCoursesLoadMore(count: number): Observable<Array<Course>> {
    return this.coursesAPIService.getCoursesLoadMore(count);
  }

  addCourse(formValue: Course): Observable<object> {
    return this.coursesAPIService.addCourse(formValue);
  }

  getCourseById(id: number): Observable<Course> {
    return this.coursesAPIService.getCourseById(id);
  }

  editCourse(formValue: Course, id: number): Observable<object> {
    return this.coursesAPIService.editCourse(formValue, id);
  }

  deleteCourse(id: number): Observable<object> {
    return this.coursesAPIService.deleteCourse(id);
  }

  searchCourses(searchValue: string): Observable<Array<Course>> {
    return this.coursesAPIService.searchCourses(searchValue);
  }

  getCoursesAsArray(searchValue?: string): Observable<Array<Course>> {
    return this.coursesAPIService.getCourses(searchValue || null);
  }

  setCountOfCourses(): void {
    this.getCourses().pipe(
      take(1),
      tap(data => this.countOfCourses = data.length)
    ).subscribe();
  }
}
