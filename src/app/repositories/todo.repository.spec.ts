import { TestBed } from '@angular/core/testing';

import { TodoRepository } from './todo.repository';

describe('TodoRepository', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoRepository = TestBed.get(TodoRepository);
    expect(service).toBeTruthy();
  });
});
