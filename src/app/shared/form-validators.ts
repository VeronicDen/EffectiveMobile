import {FormGroup, ValidationErrors} from "@angular/forms";

/**
 * Валидатор форм
 */
export class FormValidators {

  /**
   * Проверяет два поля на совпадение
   * @param controlName основное поле
   * @param matchingControlName второе поле
   */
  static mustMatch(controlName: string, matchingControlName: string): ValidationErrors {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
      return null;
    };
  }
}
