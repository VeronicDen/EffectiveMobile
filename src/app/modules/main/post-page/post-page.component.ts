import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from '@angular/core';
import {PostApiService} from "../../../api/post-api.service";
import {Post} from "../../../models/post";

/**
 * Компонент страницы одного поста
 */
@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit{

  /** Пост */
  post: Post;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postApiService: PostApiService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const postId = Number(params['post-id']);
      this.postApiService.getPostById(postId).subscribe(res => {
        this.post = res;
      })
    });
  }

  /**
   * Переходит на главную страницу
   */
  goToMain(): void {
    this.router.navigate(['main/posts']);
  }
}
