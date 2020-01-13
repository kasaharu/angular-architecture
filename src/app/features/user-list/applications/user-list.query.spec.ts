import { TestBed } from '@angular/core/testing';

import { UserListQuery } from './user-list.query';

describe('UserListQuery', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const query: UserListQuery = TestBed.get(UserListQuery);
    expect(query).toBeTruthy();
  });
});
