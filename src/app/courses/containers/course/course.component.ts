import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Course} from '../../../core/models/course';
import {ActivatedRoute, Router} from '@angular/router';
import {CoursesService} from '../../services/courses/courses.service';
import {AbstractControl} from '@angular/forms';
import {take, tap} from 'rxjs/operators';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {
  id = this.activatedRoute.snapshot.params.id;
  course: Course;

  constructor(private activatedRoute: ActivatedRoute,
              private coursesService: CoursesService,
              private router: Router) { }

  ngOnInit(): void {
    if (this.id) {
      this.coursesService.getCourseById(parseInt(this.id, 10)).pipe(
        take(1),
        tap((data) => this.course = data)
      ).subscribe();
    }
  }

  onAdd(formValue: Course): void {
    this.coursesService.addCourse(formValue).subscribe(
      () => this.router.navigate(['/courses'])
    );
  }

  onEdit(formValue: Course): void {
    this.coursesService.editCourse(formValue, formValue.id).subscribe(
      () => this.router.navigate(['/courses'])
    );
  }
}
