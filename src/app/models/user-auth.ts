/**
 * Модель данных пользователя
 */
export interface UserAuth {

  /** Логин пользователя */
  login: string;

  /** Пароль пользователя */
  password: string;

  /** Статус пользователя (авторизован или нет) */
  isLoggedIn: boolean;
}
