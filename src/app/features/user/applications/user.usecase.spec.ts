import { TestBed } from '@angular/core/testing';

import { UserUsecase } from './user.usecase';

describe('UserUsecase', () => {
  let usecase: UserUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    usecase = TestBed.inject(UserUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});