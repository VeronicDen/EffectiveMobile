import {Component} from '@angular/core';
import {CurrentStateService} from "../../services/current-state.service";
import {LocalStorageService} from "../../services/local-storage.service";
import {Router} from "@angular/router";
import {UserAuth} from "../../models/user-auth";

/**
 * Компонент шапки
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    public currentStateService: CurrentStateService,
  ) {
  }

  /**
   * Изменяет зарегистрированность пользователя
   */
  changeState(): void {
    if (this.currentStateService.isUserLoggedIn()) {
      const users: UserAuth[] = this.localStorageService.auth;
      const user = users.find(a => a.isLoggedIn);
      if (user) {
        user.isLoggedIn = false;
      }
      this.localStorageService.auth = users;
      this.router.navigate(['auth']);
    } else {
      this.router.navigate(['auth/authorization']);
    }
  }

  /**
   * Передает имя зарегистрированного пользователя
   */
  getUserName(): string {
    const user = this.localStorageService.auth.find(a => a.isLoggedIn);
    return user?.login ?? '';
  }
}
