import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {Course} from '../../../core/models/course';
import {CoursesService} from '../../services/courses/courses.service';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap, take, tap} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';

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

  @Output() course: EventEmitter<Course> = new EventEmitter();

  constructor(private coursesService: CoursesService,
              private router: Router) {
    this.isCourseFind = true;
    this.isSearched = true;
    this.coursesService.setCountOfCourses();
  }

  ngOnInit(): void {
    this.initCourses();
  }

  handleDelete(id: number): void {
    if (confirm('Do you want to delete course?')) {
      this.coursesService.deleteCourse(id).subscribe(
        () => this.initCourses()
      );
    }
  }

  handleEdit(id: number): void {
    this.router.navigate([`/courses/${id}`]);
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

  private initCourses(): void {
    this.coursesService.getCoursesAsArray().pipe(
      take(1),
      tap((data) => {
        this.coursesAsArray = data;
        this.isCourseFind = !!data.length;
      }),
      tap(() => this.setInitialCourses())
    ).subscribe();
  }
}
