import { animate, query, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Comment } from 'src/app/core/models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  animations: [
    trigger('listItem', [
      state('default', style({
        transform: 'scale(1)',
        'background-color': 'white',
        'z-index': 1
      })),
      state('active', style({
        transform: 'scale(1.05)',
        'background-color': 'rgb(201, 157, 242)',
        'z-index': 2
      })),
      transition('default => active', [
        animate('100ms ease-in-out')
      ]),
      transition('active => default', [
        animate('500ms ease-in-out')
      ]),
      transition('void => *', [
        style({
            transform: 'translateY(-100%)',
            opacity: 0,
            'background-color': 'rgb(201, 157, 242)',
        }),
        animate('250ms ease-out', style({
            transform: 'translateX(0)',
            opacity: 1,
            'background-color': 'white',
        })),
        query('span', [
          style({
              opacity: 0
          }),
          animate('500ms', style({
              opacity: 1
          }))
      ]),
      ])
    ]),
    
  ]
})
export class CommentsComponent implements OnInit {
  
  @Input() comments!: Comment[];
  @Output() newComment = new EventEmitter<string>();
  commentCtrl!: FormControl;
  animationState: {[key: number]: 'default' | 'active'} = {}

  constructor(private fb: FormBuilder){

  }

  ngOnInit(): void {
    this.commentCtrl = this.fb.control('',[Validators.required, Validators.minLength(10)])
    for (const index in this.comments) {
      this.animationState[index] = 'default';
    }
  }

  onLeaveComment(){
    if(this.commentCtrl.invalid)
      return;
    this.newComment.emit(this.commentCtrl.value);
    this.commentCtrl.reset();
  }
onListItemMouseEnter(index: number){
  this.animationState[index] = 'active';
}
onListItemMouseLeave(index: number){
  this.animationState[index] = 'default';
}


}
