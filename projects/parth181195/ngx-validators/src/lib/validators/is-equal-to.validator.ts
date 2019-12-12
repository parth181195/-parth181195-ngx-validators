import {AbstractControl, ValidatorFn, ValidationErrors} from '@angular/forms';


/**
 * validator to check if value of current control is equal to another control or not
 * @param compareWith AbstractControl
 * @returns null if value is valid or { isEqualTo: { control: AbstractControl, value: AbstractControl.value } } if value is not valid
 */

export const isEqualTo = (compareWith: AbstractControl): ValidatorFn => {
  let subscription = false;
  return (control: AbstractControl): ValidationErrors => {
    const val: string = control.value;
    if (!subscription) {
      subscription = true;
      compareWith.valueChanges.subscribe(() => {
        control.updateValueAndValidity();
      });
    }

    return compareWith.value === val ? null : {isEqualTo: {control: compareWith, value: compareWith.value}};
  };
};

