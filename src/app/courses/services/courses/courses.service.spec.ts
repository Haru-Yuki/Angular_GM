import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    spyOn(console, 'log');

    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addCourse', () => {
    it('should show console log', () => {
      service.addCourse();

      expect(console.log).toHaveBeenCalledWith('Adding course...');
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

    it('should show console log with id', () => {
      service.editCourse(id);

      expect(console.log).toHaveBeenCalledWith('Editing course with id: ' + id);
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
