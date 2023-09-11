import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/post.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
  animations: [
    trigger('listItemImage', [
      state('default', style({
        transform: 'scale(1)',
        'z-index': 1
      })),
      state('active', style({
        transform: 'scale(1.05)',
        'z-index': 2
      })),
      transition('default => active', [
        animate('100ms ease-in-out')
      ]),
      transition('active => default', [
        animate('500ms ease-in-out')
      ]),
    ])
  ]
})
export class PostListItemComponent {

  @Input() post!: Post;
  @Output() postCommented = new EventEmitter<{comment: string, commentId: number}>();
  user = {firstName: 'Papa Waly', lastName: 'Diop'};
  listItemImageAnimationState: 'default' | 'active' = 'default';


  onNewComment(comment: string){
    this.postCommented.emit({comment, commentId: this.post.id})
  }
  onListItemImageMouseEnter(){
    this.listItemImageAnimationState = 'active';
  }
  onListItemImageMouseLeave(){
    this.listItemImageAnimationState = 'default';
  }

}
