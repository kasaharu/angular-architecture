import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from '../core/models';

@Injectable({
  providedIn: 'root',
})
export class TodoRepository {
  constructor(private http: HttpClient) {}

  fetchTodoListBy(userId: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
  }
}
