
import { ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { exists } from './util/utils';

/**
 * validator to check if string is a valid iso Date or not
 * @param control AbstractControl
 */

export const isoDate = (control: AbstractControl): ValidationErrors => {
  const val = control.value;

  if (exists(Validators.required(control))) {
    return null;
  }
  // tslint:disable-next-line: max-line-length
  return /^(19[789]\d|2\d{3})-((0[13578]|1[02])-([0-2]\d|3[01])|02-[0-2]\d|0[469]|11-([0-2]\d|30))T([01]\d|2[0-4])(:[0-5]\d){2}Z$/.test(val) ? null : { isoDate: true };

};
