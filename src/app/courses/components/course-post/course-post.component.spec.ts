import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePostComponent } from './course-post.component';

describe('CoursePostComponent', () => {
  let component: CoursePostComponent;
  let fixture: ComponentFixture<CoursePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
