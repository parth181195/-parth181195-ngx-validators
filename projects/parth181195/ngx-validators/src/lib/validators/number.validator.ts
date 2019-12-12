import {AbstractControl, ValidationErrors, Validators} from '@angular/forms';
import {exists} from './util/utils';

/**
 * validator to check if string is email or not
 * @param control AbstractControl
 */

export const isNumber = (control: AbstractControl): ValidationErrors => {
  const val = control.value;

  if (exists(Validators.required(control))) {
    return null;
  }
  // tslint:disable-next-line: max-line-length
  return (val instanceof Number) ? null : {number: true};

};
