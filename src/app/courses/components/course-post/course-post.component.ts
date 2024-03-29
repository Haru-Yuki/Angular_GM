import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../../core/models/course';

@Component({
  selector: 'app-course-post',
  templateUrl: './course-post.component.html',
  styleUrls: ['./course-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursePostComponent implements OnInit {
  @Input() course: Course;
  @Output() deleted: EventEmitter<number> = new EventEmitter();
  @Output() edited: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  handleDelete(): void {
    this.deleted.emit(this.course.id);
  }

  handleEdit(): void {
    this.edited.emit(this.course.id);
  }
}
