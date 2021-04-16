import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesComponent ]
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
    beforeEach(() => {
      component.handleDelete(1);
    });
    
    it('should show console log', () => {
      expect(console.log).toHaveBeenCalledWith('Deleting course with id: ' + 1);
    });
  });

  describe('handleSearch', () => {
    beforeEach(() => {
      component.searchControl.setValue('Hello World!');
      component.handleSearch();
    });
    
    it('should show console log with search value', () => {
      expect(console.log).toHaveBeenCalledWith('Hello World!');
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
});
