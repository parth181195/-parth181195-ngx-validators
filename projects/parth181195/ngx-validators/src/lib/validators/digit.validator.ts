

import { ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { exists } from './util/utils';

/**
 * validator to check if string has only digits or not
 *
 *
 * @param control AbstractControl
 */

export const digit = (control: AbstractControl): ValidationErrors => {
  const val = control.value;

  if (exists(Validators.required(control))) {
    return null;
  }
  // tslint:disable-next-line: max-line-length
  return /^\d+$/gm.test(val) ? null : { digit: true };

};
