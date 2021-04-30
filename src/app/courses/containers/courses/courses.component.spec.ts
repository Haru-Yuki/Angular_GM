import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterPipe } from '../../pipes/filter/filter.pipe';
import { OrderByPipe } from '../../pipes/order-by/order-by.pipe';

import { CoursesComponent } from './courses.component';

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
    beforeEach(() => {
      component.handleDelete(1);
    });

    it('should show console log', () => {
      expect(console.log).toHaveBeenCalledWith('Deleting course with id: ' + 1);
    });
  });

  describe('handleEdit', () => {
    beforeEach(() => {
      component.handleEdit(1);
    });

    it('should show console log', () => {
      expect(console.log).toHaveBeenCalledWith('Editing course with id: ' + 1);
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
