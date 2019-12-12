import {AbstractControl, ValidatorFn, ValidationErrors, Validators} from '@angular/forms';
import {exists} from './util/utils';

/**
 * validator to check if value of current control is  not equal to another value or not
 * @param value value to compare value against
 * @returns null if value is valid or { isEqualTo: { control: AbstractControl, value: AbstractControl.value } } if value is not valid
 */

export const isNotEqual = (value: any): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    const val: string = control.value;
    if (exists(Validators.required(control))) {
      return null;
    }

    return control.value !== value ? null : {isNotEqual: {value: val}};
  };
};

