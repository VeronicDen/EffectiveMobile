import { AllPostsPageComponent } from './all-posts-page/all-posts-page.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostComponent } from './post/post.component';
import { PostPageComponent } from './post-page/post-page.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {RouterModule, Routes} from "@angular/router";

/**
 * Основное модуль
 */
const routes: Routes = [
  {
    path: 'posts',
    component: AllPostsPageComponent,
  },
  {
    path: 'posts/:post-id',
    component: PostPageComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  declarations: [
    AllPostsPageComponent,
    PostComponent,
    PostPageComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    RouterModule.forChild(routes),
  ]
})
export class MainModule { }
