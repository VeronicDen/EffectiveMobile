import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormValidators} from "../../../shared/form-validators";
import {LocalStorageService} from "../../../services/local-storage.service";
import {Router} from "@angular/router";
import {UserAuth} from "../../../models/user-auth";

/**
 * Компонент страницы регистрации
 */
@Component({
  selector: 'app-authorization-page',
  templateUrl: './registration-page.component.html',
})
export class RegistrationPageComponent {

  /** Форма авторизации */
  formGroup: FormGroup = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(3)]),
    },
    FormValidators.mustMatch('password', `confirmPassword`)
  )

  /** Флаги видимости символов в полях паролей */
  hide: boolean[] = [true, true];

  /** Текст сообщения об ошибке надо формой */
  errorMessage: string;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {
  }

  /**
   * Регистрирует пользователя
   */
  userRegistration(): void {
    if (!this.formGroup.valid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    const user: UserAuth = {
      login: this.formGroup.controls['login'].value,
      password: this.formGroup.controls['password'].value,
      isLoggedIn: false
    }

    if (this.localStorageService.auth.length === 0) {
      this.localStorageService.auth = [user];
      this.goToAuthorization();
    } else if (this.localStorageService.auth.some(a => a.login === user.login)) {
      this.errorMessage = 'Пользователь с таким логином уже существует';
      setTimeout(() => {
        this.errorMessage = ''
      }, 4000);
    } else {
      const users: UserAuth[] = this.localStorageService.auth;
      users.push(user);
      this.localStorageService.auth = users;
      this.goToAuthorization();
    }
  }

  /**
   * Переходит на страницу авторизации
   */
  goToAuthorization(): void {
    this.router.navigate(['auth/authorization']);
  }

  /**
   *
   */
  goToMain(): void {
    this.router.navigate(['auth']);
  }
}
