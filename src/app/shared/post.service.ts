import { AuthService } from './../auth/shared/auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostModel } from './post-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllPosts(): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>('http://www.localhost:8080/api/posts/')
  }

  
  // getAllPosts2(){
    
  // var reqHeader = new HttpHeaders({ 
    
  //   'Content-Type': 'application/json',
  //   'Authorization': 'Bearer ' + JSON.parse(this.authService.getJwtToken())
  // });
  // console.log('xxxxxx'+reqHeader);

  // return this.http.get<Array<PostModel>>('http://www.localhost:8080/api/posts/', { headers: reqHeader });
  // }
}
