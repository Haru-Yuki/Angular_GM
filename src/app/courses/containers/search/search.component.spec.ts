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
    });

    it('should emit search value', () => {
      component.searchControl.setValue('Hello World!');
      component.handleSearch();

      expect(component.searchCourseValue.emit).toHaveBeenCalledWith('Hello World!');
    });

    it('should emit empty string if no value in input', () => {
      component.searchControl.setValue(null);
      component.handleSearch();

      expect(component.searchCourseValue.emit).toHaveBeenCalledWith('');
    });
  });
});
