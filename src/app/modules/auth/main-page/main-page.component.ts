import {Component} from '@angular/core';
import {Router} from "@angular/router";

/**
 * Компонент основной страницы
 */
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  constructor(
    private router: Router,
  ) {
  }

  /**
   * Переходит на страницу регистрации
   */
  goToRegistration(): void {
    this.router.navigate(['auth/registration']);
  }
}
