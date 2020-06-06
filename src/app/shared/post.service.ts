import { AuthService } from './../auth/shared/auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostModel } from './post-model';
import { CreatePostPayload } from '../post/create-post/create-post.payload';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllPosts(): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>('http://www.localhost:8080/api/posts/')
  }
  
  createPost(postPayload: CreatePostPayload): Observable<any> {
    return this.http.post<Array<PostModel>>('http://www.localhost:8080/api/posts/', postPayload)
  }

}
