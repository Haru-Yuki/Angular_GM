import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';

describe('CoursesService', () => {
  let service: CoursesService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    });
    router = TestBed.inject(Router);
    service = TestBed.inject(CoursesService);

    spyOn(router, 'navigate');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addCourse', () => {
    it('should navigate to courses', () => {
      service.addCourse();

      expect(router.navigate).toHaveBeenCalledWith(['/courses']);
    });
  });

  describe('getCourse', () => {
    const id = 1;

    it('should return course with id', () => {
      expect(service.getCourse(id)).toBe(service['courses'][id]);
    });
  });

  describe('editCourse', () => {
    const id = 1;

    it('should navigate to courses with id', () => {
      service.editCourse(id);

      expect(router.navigate).toHaveBeenCalledWith([`/courses/${id}`]);
    });
  });

  describe('deleteCourse', () => {
    const id = 1;

    it('should remove course with id', () => {
      const courseToBeDeleted = service.getCourse(id);
      service.deleteCourse(id);

      expect(service['courses']).not.toContain(courseToBeDeleted);
    });
  });
});
