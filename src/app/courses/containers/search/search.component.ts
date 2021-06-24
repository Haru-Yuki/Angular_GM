import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {CoursesService} from '../../services/courses/courses.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  @Output() searchCourseValue: EventEmitter<string> = new EventEmitter();
  @Output() reload: EventEmitter<boolean> = new EventEmitter();

  searchControl: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.searchControl = new FormControl();
  }

  handleSearch(): void {
    this.searchCourseValue.emit(this.searchControl.value || '');
  }

  handleReload(): void {
    this.reload.emit(true);
  }
}
