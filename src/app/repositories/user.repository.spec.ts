import { UserRepository } from './user.repository';

describe('UserRepository', () => {
  it('should create an instance', () => {
    expect(new UserRepository()).toBeTruthy();
  });
});
