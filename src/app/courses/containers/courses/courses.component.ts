import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Course} from '../../../core/models/course';
import {CoursesService} from '../../services/courses/courses.service';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap, take, tap} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

const DEFAULT_COUNT = 5;

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesComponent implements OnInit {
  count = DEFAULT_COUNT;
  coursesAsArray: Array<Course> = [];
  isCourseFind: boolean;
  isSearched: boolean;
  coursesSubject: Subject<Array<Course>> = new Subject();
  courses: Observable<Array<Course>> = this.coursesSubject.asObservable();
  countOfCourses: number;

  constructor(private coursesService: CoursesService,
              private translateService: TranslateService) {
    this.isCourseFind = true;
    this.isSearched = true;
    this.coursesService.setCountOfCourses();
  }

  ngOnInit(): void {
    this.translateService.use(environment.defaultLocale);

    this.coursesService.getCoursesAsArray().pipe(
      take(1),
      tap((data) => {
        this.coursesAsArray = data;
        this.isCourseFind = !!data.length;
      }),
      tap(() => this.setInitialCourses())
    ).subscribe();
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
    if (this.count >= this.countOfCourses) {
      this.isSearched = true;
      return;
    }

    this.coursesService.getCoursesLoadMore(this.count += 5).pipe(
      take(1),
      tap(this.onCoursesReceive)
    ).subscribe();
  }

  handleSearch(search: FormControl): void {
    if (search.value === '') {
      this.handleReload();
    } else if (search.value && search.value.length >= 2) {
      search.valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        take(1),
        switchMap(
          (value) => this.coursesService.searchCourses(value)
        ),
        tap(() => this.setCoursesAsArray(search.value)),
        tap(() => this.isSearched = true),
        tap(this.onCoursesReceive)
      ).subscribe();
    }
  }

  handleReload(): void {
    window.location.reload();
  }

  private setCoursesAsArray(searchValue?: string): void {
    this.coursesService.getCoursesAsArray(searchValue).pipe(
      take(1),
      tap((data) => {
        this.coursesAsArray = data;
        this.isCourseFind = !!data.length;
      }),
    ).subscribe();
  }

  private onCoursesReceive = (courses: Array<Course>): void => {
    this.coursesSubject.next(courses);
  }

  private setInitialCourses(): void {
    this.isSearched = false;

    this.coursesService.getCoursesLoadMore(DEFAULT_COUNT).pipe(
      take(1),
      tap((data) => this.coursesSubject.next(data)),
      tap(() => this.countOfCourses = this.coursesService.countOfCourses)
    ).subscribe();
  }
}
