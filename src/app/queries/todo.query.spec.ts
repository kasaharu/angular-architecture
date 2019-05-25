import { TestBed } from '@angular/core/testing';

import { TodoQuery } from './todo.query';
import { provideMockStore } from '@ngrx/store/testing';

describe('TodoQuery', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: {
            todo: {
              todoList: null,
            },
          },
        }),
      ],
    });
  });

  it('should be created', () => {
    const service: TodoQuery = TestBed.get(TodoQuery);
    expect(service).toBeTruthy();
  });
});
