import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('handleSearch', () => {
    beforeEach(() => {
      spyOn(component.searchCourseValue, 'emit');
      component.searchControl.setValue('Hello World!');
      component.handleSearch();
    });

    it('should emit search value', () => {
      expect(component.searchCourseValue.emit).toHaveBeenCalledWith('Hello World!');
    });
  });
});
