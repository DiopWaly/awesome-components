
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../models/post.model";
import { environment } from "src/app/environments/environment";
@Injectable()
export class PostsService{
    constructor(private http: HttpClient){}

    getPost(): Observable<Post[]>{
        return this.http.get<Post[]>(`${environment.apiUrl}/posts`)
    }
    onPostCommented(postCommented: {comment: string, commentId: number}){
        console.log(postCommented);   
    }
}