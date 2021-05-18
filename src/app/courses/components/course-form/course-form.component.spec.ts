import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { CourseFormComponent } from './course-form.component';

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
});
