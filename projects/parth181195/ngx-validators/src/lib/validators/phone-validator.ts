

import { ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { exists } from './util/utils';

/**
 * validator to check if string is a valid iso Date or not
 * @param control AbstractControl
 */

export const phone = (control: AbstractControl): ValidationErrors => {
  const val = control.value;

  if (exists(Validators.required(control))) {
    return null;
  }
  // tslint:disable-next-line: max-line-length
  return /^(\d{10,21})|(\+\d{1,3}|\d{1,4}|\(\+\d{1,3}\)|\(\d{1,2}\))(([ -.]\d+){1,5}$|([ -.]\d+){1,5}([ -.]))/gm.test(val) ? null : { phone: true };

};
