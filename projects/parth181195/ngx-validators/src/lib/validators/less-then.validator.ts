import {AbstractControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {exists} from './util/utils';

/**
 * validator to check if given value is less then value in control or not
 * @param value value to compare against
 */

export const lessThen = (value: number): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    const val = +control.value;
    if (!exists(control)) {
      return null;
    }
    if (exists(Validators.required(control))) {
      return null;
    }
    return val < +value ? null : {lessThen: {value}};
  };
};

/**
 * validator to check if given value is less then equal to value in control or not
 * @param value value to compare against
 */

export const equalToLessThen = (value: number): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    const val = +control.value;
    if (!exists(control)) {
      return null;
    }
    if (exists(Validators.required(control))) {
      return null;
    }
    return val <= +value ? null : {equalToLessThen: {value}};
  };
};
