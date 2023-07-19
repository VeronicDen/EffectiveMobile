import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LocalStorageService} from "../../../services/local-storage.service";
import {Router} from "@angular/router";
import {UserAuth} from "../../../models/user-auth";

/**
 * Компонент страницы авторизации
 */
@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
})
export class AuthorizationPageComponent {

  /** Форма авторизации */
  formGroup: FormGroup = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })

  /** Флаг видимости символов в поле пароля */
  hide: boolean = true;

  /** Текст сообщения об ошибке надо формой */
  errorMessage: string;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {
  }

  /**
   * Авторизует пользователя
   */
  userAuthorization(): void {
    if (!this.formGroup.valid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    const login = this.formGroup.controls['login'].value;
    if (this.localStorageService.auth.length > 0 &&
      this.localStorageService.auth.some(a => a.login === login && a.password === this.formGroup.controls['password'].value)) {
      const users: UserAuth[] = this.localStorageService.auth;
      const user = users.find(a => a.login === login);
      if (user) {
        user.isLoggedIn = true;
      }
      this.localStorageService.auth = users;
      this.router.navigate(['main/posts']);
    } else {
      this.errorMessage = 'Неверный логин или пароль';
      setTimeout(() => {
        this.errorMessage = '';
      }, 4000);
    }
  }

  /**
   * Переходит на страницу регистрации
   */
  goToRegistration(): void {
    this.router.navigate(['auth/registration']);
  }

  /**
   * Переходит на главную страницу
   */
  goToMain(): void {
    this.router.navigate(['auth']);
  }
}
