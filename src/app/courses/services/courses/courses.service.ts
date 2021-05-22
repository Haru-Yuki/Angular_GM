import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import {Course} from '../../../core/models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private router: Router) {
    this._mockCoursesData();
  }

  private courses: Array<Course> = [];

  getCourses(): Array<Course> {
    return this.courses;
  }

  addCourse(): void {
    this.router.navigate(['/courses']);
  }

  getCourse(id: number): Course {
    return this.courses.find(course => course.id === id);
  }

  editCourse(id: number): void {
    this.router.navigate([`/courses/${id}`]);
  }

  // Courses will appear after page reload,
  // because we are using mock data on init,
  // and not deleting them on server
  deleteCourse(id: number): void {
    this.courses = this.courses.filter(course => course.id !== id);
  }

  private _mockCoursesData(): void {
    // Upcoming courses example
    for (let i = 0; i < 3; i++) {
      this.courses.push({
        id: i,
        title: 'Video Course ' + i,
        creationDate: '08/28/2021',
        duration: 88,
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various containers of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
      });
    }

    // Fresh course example
    this.courses.push({
      id: 3,
      title: 'Video Course ' + 3,
      creationDate: '04/28/2021',
      duration: 52,
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various containers of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
    });

    // Top Rated course example
    this.courses.push({
      id: 4,
      topRated: true,
      title: 'Video Course ' + 4,
      creationDate: '07/16/2020',
      duration: 20,
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various containers of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
    });
  }
}
