

import { ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { exists } from './util/utils';

/**
 * validator to check if string is a valid credit card month or not
 * @param control AbstractControl
 */

export const creditCardMonth = (control: AbstractControl): ValidationErrors => {
  const val = control.value;

  if (exists(Validators.required(control))) {
    return null;
  }
  // tslint:disable-next-line: max-line-length
  return /F^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(val) ? null : { creditCardMonth: true };

};
