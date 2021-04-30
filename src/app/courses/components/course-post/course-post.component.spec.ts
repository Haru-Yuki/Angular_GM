import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CoursePostComponent } from './course-post.component';
import { TimePipe } from '../../pipes/time/time.pipe';

const courseMock = {
  id: 1,
  title: 'Video Course 1. Name tag',
  creationDate: '08/28/2020',
  duration: 88,
  description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
};

describe('CoursePostComponent', () => {
  let component: CoursePostComponent;
  let fixture: ComponentFixture<CoursePostComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CoursePostComponent, TimePipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePostComponent);
    component = fixture.componentInstance;

    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('handleDelete', () => {
    beforeEach(() => {
        component.course = courseMock;
        spyOn(component.deleted, 'emit');

        component.handleDelete();
    });

    it('should emit course id', () => {
        expect(component.deleted.emit).toHaveBeenCalled();
    });
  });

  describe('handleEdit', () => {
    beforeEach(() => {
        component.course = courseMock;
        spyOn(component.edited, 'emit');

        component.handleEdit();
    });

    it('should emit course id', () => {
        expect(component.edited.emit).toHaveBeenCalled();
    });
  });
});
