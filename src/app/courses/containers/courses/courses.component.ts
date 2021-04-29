import { Component, OnInit, DoCheck } from '@angular/core';
import { Course } from '../../../core/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, DoCheck {

  courses: Array<Course> = [];
  isCourseFind = true;

  constructor() { }

  ngOnInit(): void {
    this.mockCoursedData();
  }

  ngDoCheck(): void {
    if (this.courses && this.courses.length === 0) {
      this.isCourseFind = false;
    } else {
      this.isCourseFind = true;
    }
  }

  mockCoursedData(): void {
    // Upcoming courses example
    for (let i = 0; i < 3; i++) {
      this.courses.push({
        id: i,
        title: 'Video Course 1. Name tag',
        creationDate: '08/28/2021',
        duration: '1h 28min',
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
      });
    }

    // Fresh course example
    this.courses.push({
      id: 3,
      title: 'Video Course 1. Name tag',
      creationDate: '04/28/2021',
      duration: '1h 28min',
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
    });

    // Top Rated course example
    this.courses.unshift({
      id: 4,
      topRated: true,
      title: 'Video Course 1. Name tag',
      creationDate: '04/28/2021',
      duration: '1h 28min',
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
    });
  }

  handleDelete(id: number): void {
    console.log('Deleting course with id: ' + id);
  }

  handleEdit(id: number): void {
    console.log('Editing course with id: ' + id);
  }

  handleLoadMore(): void {
    console.log('Loading more courses...');
  }
}
