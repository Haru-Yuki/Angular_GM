import { Component, OnInit } from '@angular/core';
import { Course } from '../../../core/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Array<Course> = [];

  constructor() { }

  ngOnInit(): void {
    this.mockCoursedData();
  }
  
  mockCoursedData(): void {
    const course: Course = {
      id: 1,
      title: 'Video Course 1. Name tag',
      creationDate: '08/28/2020',
      duration: '1h 28min',
      description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester."
    };

    for (let i: number = 0; i < 3; i++) {
      this.courses.push(course);
    }

    console.log(this.courses);
  }

  handleDelete(): void {
    console.log('Deleting course...');
  }

}
