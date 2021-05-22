import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { CourseFormComponent } from './course-form.component';

const courseMock = {
  id: 1,
  title: 'Video Course 1. Name tag',
  creationDate: '08/28/2020',
  duration: 88,
  description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various containers of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
};

describe('CourseFormComponent', () => {
  let component: CourseFormComponent;
  let fixture: ComponentFixture<CourseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseFormComponent ],
      providers: [ FormBuilder, DatePipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('@Input() set course', () => {
    it('should set isExisted to true if there is course', () => {
      component.course = courseMock;

      expect(component.isExisted).toBeTruthy();
    });
  });

  describe('onAdd' , () => {
    beforeEach(() => {
      spyOn(component.add, 'emit');
    });

    it('should emit form value if form is valid', () => {
      component.form.get('title').setErrors(null);
      component.form.get('description').setErrors(null);
      component.form.get('duration').setErrors(null);
      component.form.get('date').setErrors(null);
      component.form.get('author').setErrors(null);
      component.onAdd();

      expect(component.add.emit).toHaveBeenCalledWith(component.form.value);
    });

    it('should not emit form value if form is invalid', () => {
      component.form.setErrors({});
      component.onAdd();

      expect(component.add.emit).not.toHaveBeenCalled();
    });
  });

  describe('onEdit' , () => {
    beforeEach(() => {
      spyOn(component.edit, 'emit');
    });

    it('should emit form value if form is valid', () => {
      component.form.get('title').setErrors(null);
      component.form.get('description').setErrors(null);
      component.form.get('duration').setErrors(null);
      component.form.get('date').setErrors(null);
      component.form.get('author').setErrors(null);
      component.onEdit();

      expect(component.edit.emit).toHaveBeenCalledWith({ ...component.form.value, id: component.id });
    });

    it('should not emit form value if form is invalid', () => {
      component.form.setErrors({});
      component.onEdit();

      expect(component.edit.emit).not.toHaveBeenCalled();
    });
  });
});
