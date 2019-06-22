import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { TodoRepository } from '../repositories/todo.repository';
import { UserRepository } from '../repositories/user.repository';
import { TodoStoreActions } from '../store/root/todo-store';
import { UserStoreActions } from '../store/root/user-store';
import { PostRepository } from '../repositories/post.repository';
import { PostStoreActions } from '../store/root/post-store';

@Injectable({
  providedIn: 'root',
})
export class DetailUsecase {
  constructor(
    private store$: Store<{}>,
    private userRepository: UserRepository,
    private todoRepository: TodoRepository,
    private postRepository: PostRepository,
  ) {}

  async initialize(userId: number) {
    const user = await this.userRepository.fetchUser(userId).toPromise();
    this.store$.dispatch(UserStoreActions.saveSelectedUser(user));
    const todoList = await this.todoRepository.fetchTodoListBy(user.id).toPromise();
    this.store$.dispatch(TodoStoreActions.saveTodoList(todoList));
    const postList = await this.postRepository.fetchPostListBy(user.id).toPromise();
    this.store$.dispatch(PostStoreActions.savePostList(postList));
  }
}
