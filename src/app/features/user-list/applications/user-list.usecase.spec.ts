import { TestBed } from '@angular/core/testing';

import { UserListUsecase } from './user-list.usecase';

describe('UserListUsecase', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const usecase: UserListUsecase = TestBed.get(UserListUsecase);
    expect(usecase).toBeTruthy();
  });
});
