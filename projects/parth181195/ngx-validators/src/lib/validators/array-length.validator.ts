import { ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { exists } from './util/utils';

/**
 * validator to check if array has more length then the given number
 * @param value value to check array length against
 */

export const arrayLengthGraterThen = (value: number): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {

    if (exists(Validators.required(control))) {
      return null;
    }

    const obj = control.value;
    return Array.isArray(obj) && obj.length >= +value ? null : { arrayLength: { minLength: value } };
  };
}
