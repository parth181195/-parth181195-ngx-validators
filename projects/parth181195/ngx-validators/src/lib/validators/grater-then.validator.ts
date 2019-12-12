import {AbstractControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {exists} from './util/utils';

/**
 * validator to check if given value is grater then value in control or not
 * @param value value to compare against
 */

export const graterThen = (value: number): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    const val = +control.value;
    if (!exists(control)) {
      return null;
    }
    if (exists(Validators.required(control))) {
      return null;
    }
    return val > +value ? null : {graterThen: {value}};
  };
};

/**
 * validator to check if given value is grater then equal to value in control or not
 * @param value value to compare against
 */

export const equalToGraterThen = (value: number): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    const val = +control.value;
    if (!exists(control)) {
      return null;
    }
    if (exists(Validators.required(control))) {
      return null;
    }
    return val >= +value ? null : {equalToGraterThen: {value}};
  };
};
