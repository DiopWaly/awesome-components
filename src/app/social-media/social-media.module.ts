import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { PostsService } from './services/posts.service';
import { PostListComponent } from './component/post-list/post-list.component';
import { PostsResolver } from './resolvers/post-resolver.resolver';
import { PostListItemComponent } from './component/post-list-item/post-list-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PostListComponent,
    PostListItemComponent
  ],
  imports: [
    CommonModule,
    SocialMediaRoutingModule,
    SharedModule
  ],
  providers: [
    PostsService,
    PostsResolver
  ]
})
export class SocialMediaModule { }
