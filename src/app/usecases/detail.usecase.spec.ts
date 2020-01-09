import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { skip } from 'rxjs/operators';
import { Album, Post, Todo, User } from '../core/models';
import { AlbumRepository } from '../infrastructures/repositories/album.repository';
import { PostRepository } from '../infrastructures/repositories/post.repository';
import { TodoRepository } from '../infrastructures/repositories/todo.repository';
import { UserRepository } from '../infrastructures/repositories/user.repository';
import { AlbumStoreActions } from '../store/root/album-store';
import { PostStoreActions } from '../store/root/post-store';
import { TodoStoreActions } from '../store/root/todo-store';
import { UserStoreActions } from '../store/root/user-store';
import { DetailUsecase } from './detail.usecase';

class MockUserRepository {
  fetchUser() {}
}

class MockTodoRepository {
  fetchTodoListBy() {}
}

class MockPostRepository {
  fetchPostListBy() {}
}

class MockAlbumRepository {
  fetchAlbumListBy() {}
}

describe('DetailUsecase', () => {
  let userRepository: UserRepository;
  let todoRepository: TodoRepository;
  let postRepository: PostRepository;
  let albumRepository: AlbumRepository;
  let usecase: DetailUsecase;
  let store$: MockStore<{}>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: {
            user: {
              selectedUser: null,
            },
          },
        }),
        { provide: UserRepository, useClass: MockUserRepository },
        { provide: TodoRepository, useClass: MockTodoRepository },
        { provide: PostRepository, useClass: MockPostRepository },
        { provide: AlbumRepository, useClass: MockAlbumRepository },
      ],
    });

    userRepository = TestBed.get(UserRepository);
    todoRepository = TestBed.get(TodoRepository);
    postRepository = TestBed.get(PostRepository);
    albumRepository = TestBed.get(AlbumRepository);
    usecase = TestBed.get(DetailUsecase);
    store$ = TestBed.get(Store);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });

  it('call initialize() method', async () => {
    const userId = 1;
    const user: User = {
      id: userId,
      name: '',
      username: '',
      email: '',
      address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: 0, lng: 0 } },
      phone: '',
      website: '',
      company: { name: '', catchPhrase: '', bs: '' },
    };
    const todoList: Todo[] = [{ userId, id: 1, title: '', completed: false }];
    const postList: Post[] = [{ userId, id: 1, title: '', body: '' }];
    const albumList: Album[] = [{ userId, id: 1, title: '' }];

    const saveSelectedUserAction = UserStoreActions.saveSelectedUser(user);
    const saveTodoListAction = TodoStoreActions.saveTodoList(todoList);
    const savePostListAction = PostStoreActions.savePostList(postList);
    const saveAlbumListAction = AlbumStoreActions.saveAlbumList(albumList);
    const calledActionList = [saveSelectedUserAction, saveTodoListAction, savePostListAction, saveAlbumListAction];

    spyOn(userRepository, 'fetchUser').and.returnValue(of(user));
    spyOn(todoRepository, 'fetchTodoListBy').and.returnValue(of(todoList));
    spyOn(postRepository, 'fetchPostListBy').and.returnValue(of(postList));
    spyOn(albumRepository, 'fetchAlbumListBy').and.returnValue(of(albumList));

    const actions: any = [];
    store$.scannedActions$.pipe(skip(1)).subscribe((action) => actions.push(action));

    await usecase.initialize(userId);

    expect(actions).toEqual(calledActionList);
  });
});
