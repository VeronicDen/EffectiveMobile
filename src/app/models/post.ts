/**
 * Модель данных поста
 */
export interface Post {

  /** Идентификатор пользователя */
  userId: number,

  /** Идентификатор поста */
  id: number,

  /** Название */
  title: string,

  /** Основной текст */
  body: string
}
