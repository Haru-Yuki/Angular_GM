import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../../core/models/course';

@Pipe({
  name: 'orderByDate'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<Course>): Array<Course> {
      return value.sort((a, b) => {
        return new Date(a.creationDate).getTime() - new Date(b.creationDate).getTime();
      });
  }

}
