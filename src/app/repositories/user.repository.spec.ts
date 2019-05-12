import { TestBed } from '@angular/core/testing';

import { UserRepository } from './user.repository';

describe('UserRepository', () => {
  let repository: UserRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    repository = TestBed.get(UserRepository);
  });

  it('should create an instance', () => {
    expect(repository).toBeTruthy();
  });
});
