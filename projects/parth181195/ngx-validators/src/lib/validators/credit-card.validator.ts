import { ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { exists } from './util/utils';

/**
 * validator to check if string is a valid credit card number or not
 * @param control AbstractControl
 */

export const creditCard = (control: AbstractControl): ValidationErrors => {
  const val = control.value;

  if (exists(Validators.required(control))) {
    return null;
  }
  // tslint:disable-next-line: max-line-length
  return /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}(?:2131|1800|35\d{3})\d{11})$/gm.test(val) ? null : { creditCard: true };

};
