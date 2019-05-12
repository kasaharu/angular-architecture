import { TestBed } from '@angular/core/testing';

import { UserQuery } from './user.query';

describe('UserQuery', () => {
  let query: UserQuery;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    query = TestBed.get(UserQuery);
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });
});
