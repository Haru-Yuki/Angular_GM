import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {
    return (value >= 60)
      ? `${Math.floor(value / 60)}h ${value - (60 * Math.floor(value / 60))}min`
      : `${value}min`;
  }

}
