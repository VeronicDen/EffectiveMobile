import {Component, OnInit} from '@angular/core';
import {PostApiService} from "../../../api/post-api.service";
import {Post} from "../../../models/post";
import {Router} from "@angular/router";

/**
 * Компонент страницы всех постов
 */
@Component({
  selector: 'app-all-posts-page',
  templateUrl: './all-posts-page.component.html',
  styleUrls: ['./all-posts-page.component.scss']
})
export class AllPostsPageComponent implements OnInit{

  /** Массив всех постов */
  posts: Post[] = [];

  constructor(
    private postApiService: PostApiService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.postApiService.getPosts().subscribe(res => {
      this.posts = res;
    })
  }

  /**
   * Переходит на страницу поста
   * @param id идентификатор поста
   */
  getPost(id: number): void {
    this.router.navigate(['main', 'posts', id]);
  }
}
