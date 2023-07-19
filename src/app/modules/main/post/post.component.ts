import {Component, Input} from '@angular/core';
import {Post} from "../../../models/post";

/**
 * Компонент поста
 */
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  /** Пост */
  @Input()
  post: Post;
}
