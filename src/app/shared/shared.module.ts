import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './components/comments/comments.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from './pipes/shorten.pipe';
import { UserNamePipe } from './pipes/userName.pipe';
import { HightlightDirective } from './directives/hightlith.directive';



@NgModule({
  declarations: [
    CommentsComponent,
    ShortenPipe,
    UserNamePipe,
    HightlightDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ], 
  exports: [
    CommentsComponent,
    MaterialModule,
    ShortenPipe,
    UserNamePipe,
    HightlightDirective,
  ]
})
export class SharedModule { }
