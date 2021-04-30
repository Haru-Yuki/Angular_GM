import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchCourseValue: EventEmitter<string> = new EventEmitter();

  searchControl: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.searchControl = new FormControl();
  }

  handleSearch(): void {
    this.searchCourseValue.emit(this.searchControl.value || '');
  }
}
