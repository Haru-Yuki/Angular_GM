import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Course} from '../../../models/course';
import {HttpClient} from '@angular/common/http';
import {concatMap} from 'rxjs/operators';

const BASE_URL = 'http://localhost:3004';

@Injectable({
  providedIn: 'root'
})
export class CoursesApiService {
  constructor(private httpClient: HttpClient) { }

  getCourses(searchValue?: string): Observable<Array<Course>> {
    return searchValue
    ? this.httpClient.get<Array<Course>>(`${BASE_URL}/courses?sort=date&textFragment=${searchValue}`)
    : this.httpClient.get<Array<Course>>(`${BASE_URL}/courses?sort=date`);
  }

  getCoursesLoadMore(count: number): Observable<Array<Course>> {
    return this.httpClient.get<Array<Course>>(`${BASE_URL}/courses?start=0&count=${count}&sort=date`);
  }

  getCourseById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`${BASE_URL}/courses/${id}`);
  }

  deleteCourse(id: number): Observable<object> {
    return this.httpClient.delete(`${BASE_URL}/courses/${id}`);
  }

  addCourse(formValue: Course): Observable<object> {
    return this.httpClient.post(`${BASE_URL}/courses`, {...formValue});
  }

  editCourse(formValue: Course, id): Observable<object> {
    return this.httpClient.patch(`${BASE_URL}/courses/${id}`, {...formValue});
  }

  searchCourses(searchValue: string): Observable<Array<Course>> {
    return this.httpClient.get<Array<Course>>(`${BASE_URL}/courses?sort=date&textFragment=${searchValue}`);
  }
}
