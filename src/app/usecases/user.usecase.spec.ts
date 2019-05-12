import { TestBed } from '@angular/core/testing';

import { UserUsecase } from './user.usecase';

describe('UserUsecase', () => {
  let usecase: UserUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    usecase = TestBed.get(UserUsecase);
  });
  it('should create an instance', () => {
    expect(usecase).toBeTruthy();
  });
});
