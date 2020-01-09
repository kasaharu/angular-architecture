import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../core/models';

@Injectable({
  providedIn: 'root',
})
export class PostRepository {
  constructor(private http: HttpClient) {}

  fetchPostListBy(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }
}
