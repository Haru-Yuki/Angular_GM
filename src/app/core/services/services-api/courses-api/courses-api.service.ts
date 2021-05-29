import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Course} from '../../../models/course';
import {HttpClient} from '@angular/common/http';

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

  deleteCourse(id: number): void {
    this.httpClient.delete(`${BASE_URL}/courses/${id}`);
  }

  addCourse(formValue: Course): void {
    this.httpClient.post(`${BASE_URL}/courses`, {formValue});
  }

  editCourse(formValue: Course, id): void {
    this.httpClient.patch(`${BASE_URL}/courses/${id}`, {formValue});
  }

  searchCourses(searchValue: string): Observable<Array<Course>> {
    return this.httpClient.get<Array<Course>>(`${BASE_URL}/courses?sort=date&textFragment=${searchValue}`);
  }
}
