import { TestBed } from '@angular/core/testing';

import { UserListQuery } from './user-list.query';

describe('UserListQuery', () => {
  let query: UserListQuery;
  beforeEach(() => {
    TestBed.configureTestingModule({});

    query = TestBed.get(UserListQuery);
  });

  it('should be created', () => {
    expect(query).toBeTruthy();
  });
});
