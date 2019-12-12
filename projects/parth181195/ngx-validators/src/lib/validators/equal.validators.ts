import {AbstractControl, ValidatorFn, ValidationErrors, Validators} from '@angular/forms';
import {exists} from './util/utils';

/**
 * validator to check if value of current control is equal to another value or not
 * @param control AbstractControl
 * @returns null if value is valid or { isEqual: {value: val} } if value is not valid
 */

export const isEqual = (value: any): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    const val: string = control.value;
    if (exists(Validators.required(control))) {
      return null;
    }

    return control.value === value ? null : {isEqual: {value: val}};
  };
};

