import { TestBed } from '@angular/core/testing';

import { UserQuery } from './user.query';

describe('UserQuery', () => {
  let query: UserQuery;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    query = TestBed.inject(UserQuery);
  });

  it('should be created', () => {
    expect(query).toBeTruthy();
  });
});