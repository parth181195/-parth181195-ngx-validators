
import { ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { exists, parseDate, isDate } from './util/utils';

/**
 * validator to check if string is a valid iso Date or not
 * @param control AbstractControl
 */

export const date = (control: AbstractControl): ValidationErrors => {
  const val = control.value;
  const parsedDate = parseDate(val);
  if (exists(Validators.required(control))) {
    return null;
  }
  // tslint:disable-next-line: max-line-length
  return isDate(parsedDate) ? null : { date: true };

};
