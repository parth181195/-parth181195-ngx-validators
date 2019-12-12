

import { ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { exists } from './util/utils';

/**
 * validator to check if string is url or not
 * @param control AbstractControl
 */

export const url = (control: AbstractControl): ValidationErrors => {
  const val = control.value;

  if (exists(Validators.required(control))) {
    return null;
  }
  // tslint:disable-next-line: max-line-length
  return /^((?:(https?):\/\/)?((?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9][0-9]|[0-9])\.(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9][0-9]|[0-9])\.)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9][0-9]|[0-9])\.)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9][0-9]|[0-9]))|(?:(?:(?:\w+\.){1,2}[\w]{2,3})))(?::(\d+))?((?:\/[\w]+)*)(?:\/|(\/[\w]+\.[\w]{3,4})|(\?(?:([\w]+=[\w]+)&)*([\w]+=[\w]+))?|\?(?:(wsdl|wadl))))$/gmi.test(val) ? null : { url: true };

};
