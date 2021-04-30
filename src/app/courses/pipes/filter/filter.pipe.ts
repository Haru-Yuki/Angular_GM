import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../../core/models/course';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Course>, filterBy: string, filterByValue: any = ''): Array<Course> {
    return value.filter(course => course[filterBy].includes(filterByValue));
  }

}
