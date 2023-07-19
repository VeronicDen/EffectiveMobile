import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../models/post";

/**
 * Сервис для отправки запросов постов
 */
@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  /** Базовый URL */
  urlPrime: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  /**
   * Отправляет запрос на получение всех постов
   */
  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.urlPrime);
  }

  /**
   * Отправляет запрос на получение одного поста по идентификатору
   * @param id идентификатор
   */
  getPostById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`${this.urlPrime}/${id}`)
  }
}
