import {Component, Output, EventEmitter, ChangeDetectionStrategy, Input} from '@angular/core';
import { Course } from '../../../core/models/course';
import { FormBuilder, Validators } from '@angular/forms';
import { rangeValidator } from '../../../core/validators/range.validator';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseFormComponent {
  id: number;
  isExisted: boolean;

  @Input() set course(course: Course) {
    if (course && course.id !== null) {
      course.date = this.datePipe.transform(course.creationDate, 'yyyy-MM-dd');

      this.id = course.id;
      this.isExisted = true;
      this.form.patchValue(course);
    }
  }

  @Output() add: EventEmitter<Course> = new EventEmitter();
  @Output() edit: EventEmitter<Course> = new EventEmitter();

  form = this.fb.group({
    title: ['', [ Validators.required, Validators.maxLength(50) ]],
    description: ['', [ Validators.required, Validators.maxLength(500) ]],
    duration: ['', [ Validators.required, rangeValidator(1, 600) ]],
    date: ['', Validators.required],
    author: ['']
  });

  get isDurationRangeValid(): boolean {
    return this.form.get('duration').hasError('range') && this.form.get('duration').dirty;
  }

  get isTitleLengthValid(): boolean {
    return this.form.get('title').hasError('maxlength') && this.form.get('title').dirty;
  }

  get isDescriptionLengthValid(): boolean {
    return this.form.get('description').hasError('maxlength') && this.form.get('description').dirty;
  }

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe
  ) { }

  onAdd(): void {
    if (this.form.valid) {
      this.add.emit(this.form.value);
    }
  }

  onEdit(): void {
    if (this.form.valid) {
      this.edit.emit({ ...this.form.value, id: this.id });
    }
  }
}
