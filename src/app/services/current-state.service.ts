import { Injectable } from '@angular/core';
import {LocalStorageService} from "./local-storage.service";

/**
 * Сервис для работы с текущими состояниями
 */
@Injectable({
  providedIn: 'root'
})
export class CurrentStateService {

  constructor(
    public localStorageService: LocalStorageService,
  ) {
  }

  /**
   * Проверяет авторизацию пользователя
   */
  isUserLoggedIn(): boolean {
    return this.localStorageService.auth.length > 0 && this.localStorageService.auth.some(a => a.isLoggedIn);
  }
}
