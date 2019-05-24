import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { TodoRepository } from '../repositories/todo.repository';
import { UserRepository } from '../repositories/user.repository';
import { TodoStoreActions } from '../store/root/todo-store';
import { UserStoreActions } from '../store/root/user-store';

@Injectable({
  providedIn: 'root',
})
export class DetailUsecase {
  constructor(private store$: Store<{}>, private userRepository: UserRepository, private todoRepository: TodoRepository) {}

  async initialize(userId: number) {
    const user = await this.userRepository.fetchUser(userId).toPromise();
    this.store$.dispatch(UserStoreActions.saveSelectedUser(user));
    const todoList = await this.todoRepository.fetchTodoListBy(user.id).toPromise();
    this.store$.dispatch(TodoStoreActions.saveTodoList(todoList));
  }
}
