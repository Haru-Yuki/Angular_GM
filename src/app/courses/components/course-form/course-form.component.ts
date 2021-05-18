import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../../core/models/course';
import { FormBuilder, Validators } from '@angular/forms';
import { rangeValidator } from '../../../core/validators/range.validator';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseFormComponent {
  @Output() add: EventEmitter<Course> = new EventEmitter();

  form = this.fb.group({
    title: ['', [ Validators.required, Validators.maxLength(50) ]],
    description: ['', [ Validators.required, Validators.maxLength(50) ]],
    duration: ['', [ Validators.required, rangeValidator(1, 600) ]],
    date: ['', Validators.required],
    author: ['', Validators.required]
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
    private fb: FormBuilder
  ) { }

  onAdd(): void {
    if (this.form.valid) {
      this.add.emit(this.form.value);
    }
  }
}
