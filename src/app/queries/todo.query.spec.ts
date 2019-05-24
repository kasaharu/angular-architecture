import { TestBed } from '@angular/core/testing';

import { TodoQuery } from './todo.query';

describe('TodoQuery', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoQuery = TestBed.get(TodoQuery);
    expect(service).toBeTruthy();
  });
});
