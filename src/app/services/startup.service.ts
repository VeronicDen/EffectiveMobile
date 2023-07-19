import { Injectable } from '@angular/core';
import {CurrentStateService} from "./current-state.service";
import {Observable, of} from "rxjs";
import {Router} from "@angular/router";

/**
 * Сервис запуска приложения
 */
@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(
    private currentStateService: CurrentStateService,
    private router: Router,
  ) { }

  /**
   * Восстанавливает сессию пользователя
   */
  run(): Observable<void> {
    if (this.currentStateService.isUserLoggedIn()) {
      this.router.navigate(['main/posts']);
    } else {
      this.router.navigate(['auth']);
    }

    return of(void 0);
  }
}
