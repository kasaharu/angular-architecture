import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Todo } from '../core/models';
import { TodoRepository } from './todo.repository';

describe('TodoRepository', () => {
  let repository: TodoRepository;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    repository = TestBed.get(TodoRepository);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(repository).toBeTruthy();
  });

  it('call fetchTodoListBy() method', () => {
    const payload: Todo[] = [];
    const userId = 1;
    repository.fetchTodoListBy(userId).subscribe((result) => expect(result).toEqual(payload));

    const req = httpTestingController.expectOne(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    expect(req.request.method).toEqual('GET');
    req.flush(payload);
    httpTestingController.verify();
  });
});
