import { Injectable } from '@angular/core';
import {LocalStorageKeys} from "../models/local-storage-keys";
import {UserAuth} from "../models/user-auth";

/**
 * Сервис для работы с localStorage
 */
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  /**
   * Получает информацию о пользователях
   */
  get auth(): UserAuth[] {
    return JSON.parse(localStorage.getItem(LocalStorageKeys.AUTH) || '[]');
  }

  /**
   * Устанавливает информацию о пользователях
   * @param value информация
   */
  set auth(value: UserAuth[]) {
    localStorage.setItem(LocalStorageKeys.AUTH, JSON.stringify(value));
  }
}
