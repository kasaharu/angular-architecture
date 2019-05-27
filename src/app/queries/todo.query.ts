import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Todo } from '../core/models';
import { TodoStoreState } from '../store/root/todo-store';

@Injectable({
  providedIn: 'root',
})
export class TodoQuery {
  constructor(private store$: Store<{}>) {}

  todoList$: Observable<Todo[]> = this.store$.pipe(select(TodoStoreState.selectTodoList));
}