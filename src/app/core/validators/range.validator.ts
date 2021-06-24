import {AbstractControl, ValidatorFn} from '@angular/forms';

export function rangeValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { range: true } | null => {
    return (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max))
      ? { range: true }
      : null;
  };
}
