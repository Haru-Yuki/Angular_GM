import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { Course } from '../../../core/models/course';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, DoCheck {
  courses: Array<Course> = [];
  searchCourseValue: string;
  isCourseFind: boolean;
  isCourseFindSearch = true;

  constructor() {}

  ngOnInit(): void {
    this.mockCoursesData();
  }

  ngDoCheck(): void {
    if (this.courses && this.courses.length === 0 || !this.isCourseFindSearch) {
      this.isCourseFind = false;
    } else {
      this.isCourseFind = true;
    }
  }

  mockCoursesData(): void {
    // Upcoming courses example
    for (let i = 0; i < 3; i++) {
      this.courses.push({
        id: i,
        title: 'Video Course ' + i,
        creationDate: '08/28/2021',
        duration: 88,
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
      });
    }

    // Fresh course example
    this.courses.push({
      id: 3,
      title: 'Video Course ' + 3,
      creationDate: '04/28/2021',
      duration: 52,
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
    });

    // Top Rated course example
    this.courses.push({
      id: 4,
      topRated: true,
      title: 'Video Course ' + 4,
      creationDate: '07/16/2020',
      duration: 20,
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

  handleSearch(value: string): void {
    this.searchCourseValue = value;

    if (this.courses.filter(courses => courses.title.includes(value)).length === 0) {
      this.isCourseFindSearch = false;
    } else {
      this.isCourseFindSearch = true;
    }
  }
}
