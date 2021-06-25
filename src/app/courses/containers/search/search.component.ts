import {ChangeDetectionStrategy, Component, DoCheck, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit, DoCheck {
  @Output() search: EventEmitter<FormControl> = new EventEmitter();
  @Output() reload: EventEmitter<boolean> = new EventEmitter();

  searchControl: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.searchControl = new FormControl();
  }

  ngDoCheck(): void {
    this.search.emit(this.searchControl);
  }

  handleReload(): void {
    this.reload.emit(true);
  }
}
