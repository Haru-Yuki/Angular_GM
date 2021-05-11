import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterPipe } from '../../pipes/filter/filter.pipe';
import { OrderByPipe } from '../../pipes/order-by/order-by.pipe';

import { CoursesComponent } from './courses.component';

const courseMock = {
  id: 1,
  title: 'Video Course 1. Name tag',
  creationDate: '08/28/2020',
  duration: 88,
  description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various containers of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
};

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesComponent, OrderByPipe, FilterPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(console, 'log');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('handleDelete', () => {
    const id = 1;

    beforeEach(() => {
      spyOn(component['coursesService'], 'deleteCourse');
    });

    it('should call deleteCourse with id from service if user confirms', () => {
      spyOn(window, 'confirm').and.returnValue(true);
      component.handleDelete(id);

      expect(component['coursesService'].deleteCourse).toHaveBeenCalledWith(id);
    });

    it('should not call deleteCourse with id from service if user do not confirms', () => {
      spyOn(window, 'confirm').and.returnValue(false);
      component.handleDelete(id);

      expect(component['coursesService'].deleteCourse).not.toHaveBeenCalled();
    });
  });

  describe('handleEdit', () => {
    beforeEach(() => {
      component.isCourseFindSearch = false;
      spyOn(component['coursesService'], 'editCourse');

      component.ngDoCheck();
      component.handleEdit(1);
    });

    it('should call editCourse from service', () => {
      expect(component['coursesService'].editCourse).toHaveBeenCalled();
    });
  });

  describe('handleLoadMore', () => {
    beforeEach(() => {
      component.handleLoadMore();
    });

    it('should show console log', () => {
      expect(console.log).toHaveBeenCalledWith('Loading more courses...');
    });
  });

  describe('handleSearch', () => {
    const value = 'Search';

    it('should set isCourseFindSearch to true if course is not found', () => {
      courseMock.title = value;
      component.courses = [courseMock];
      component.handleSearch(value);

      expect(component.isCourseFindSearch).toBeTruthy();
    });

    it('should set isCourseFindSearch to false if course is not found', () => {
      courseMock.title = 'Title';
      component.courses = [courseMock];
      component.handleSearch(value);

      expect(component.isCourseFindSearch).toBeFalsy();
    });
  });
});
