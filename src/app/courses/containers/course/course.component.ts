import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Course} from '../../../core/models/course';
import {ActivatedRoute} from '@angular/router';
import {CoursesService} from '../../services/courses/courses.service';

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
              private coursesService: CoursesService) { }

  ngOnInit(): void {
    if (this.id) {
      this.course = this.coursesService.getCourse(parseInt(this.id, 10));
    }
  }

  onAdd(): void {
    this.coursesService.addCourse();
  }
}
