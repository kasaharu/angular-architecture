import { TestBed } from '@angular/core/testing';
import { Action, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { skip } from 'rxjs/operators';
import { createMockUser } from '../../../testing/factories/user';
import { User } from '../domain/user';
import { UserRepository } from '../infrastructures/repositories/user.repository';
import { actions as userActions, featureName as userStoreFeatureName, State as UserStoreState } from './user.store';
import { UserUsecase } from './user.usecase';

class MockUserRepository {
  fetchUser() {}
  fetchUserList() {}
  updateUser() {}
}

describe('UserUsecase', () => {
  let usecase: UserUsecase;
  let repository: UserRepository;
  let store$: MockStore<{}>;

  interface State {
    [userStoreFeatureName]: UserStoreState;
  }
  const initialState: State = {
    [userStoreFeatureName]: {
      userList: null,
      user: null,
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState }), { provide: UserRepository, useClass: MockUserRepository }],
    });

    usecase = TestBed.inject(UserUsecase);
    repository = TestBed.inject(UserRepository);
    store$ = TestBed.get(Store);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });

  it('call initializeDetail()', async () => {
    const user: User = {
      id: 1,
      name: 'Test Taro',
      username: 'Taro',
      email: 'taro@aaa.com',
      address: { street: 'street', suite: 'suite', city: 'test city', zipcode: '000-0000', geo: { lat: '-10.0001', lng: '10.0001' } },
      phone: '',
      website: '',
      company: { name: '', catchPhrase: '', bs: '' },
    };
    const id = 1;

    spyOn(repository, 'fetchUser').and.returnValue(of(user));

    const saveUserAction = userActions.saveUser({ user });
    const expected = [saveUserAction];

    const actions: Action[] = [];
    store$.scannedActions$.pipe(skip(1)).subscribe((action) => actions.push(action));

    await usecase.initializeDetail(id);

    expect(actions).toEqual(expected);
  });

  describe('call initializeSummary()', () => {
    let userList: User[];
    beforeEach(() => {
      userList = [
        {
          id: 1,
          name: 'name',
          username: 'username',
          email: 'email',
          address: { street: 'street', suite: 'suite', city: 'city', zipcode: 'zipcode', geo: { lat: '0', lng: '0' } },
          phone: 'phone',
          website: 'website',
          company: { name: 'company-name', catchPhrase: 'company-catchPhrase', bs: 'company-bs' },
        },
      ];
      spyOn(repository, 'fetchUserList').and.returnValue(of(userList));
    });

    it('store に userList がない場合は userActions.saveUserList が dispatch されること', async () => {
      const saveUserListAction = userActions.saveUserList({ userList });
      const expected = [saveUserListAction];

      const actions: Action[] = [];
      store$.scannedActions$.pipe(skip(1)).subscribe((action) => actions.push(action));
      await usecase.initializeSummary();

      expect(actions).toEqual(expected);
    });

    it('store に userList がある場合は userActions.saveUserList が dispatch されないこと', async () => {
      const saveUserListAction = userActions.saveUserList({ userList });
      const newState: State = { ...initialState, [userStoreFeatureName]: { userList, user: null } };
      store$.setState(newState);

      const actions: Action[] = [];
      store$.scannedActions$.pipe(skip(1)).subscribe((action) => actions.push(action));
      await usecase.initializeSummary();

      expect(actions).not.toContain(saveUserListAction);
    });
  });

  describe('call updateUser()', () => {
    let targetUser: User;
    let userList: User[];
    beforeEach(() => {
      targetUser = createMockUser({ id: 100 });
      userList = [createMockUser({ id: 1 }), createMockUser({ id: 100 })];
      spyOn(repository, 'fetchUserList').and.returnValue(of(userList));
      spyOn(repository, 'updateUser').and.returnValue(of(targetUser));
    });

    it('store に userList がない場合は userRepository.fetchUserList が call されること', async () => {
      const saveUserListAction = userActions.saveUserList({ userList });
      const expected = [saveUserListAction];

      const actions: Action[] = [];
      store$.scannedActions$.pipe(skip(1)).subscribe((action) => actions.push(action));
      await usecase.updateUser(targetUser);

      expect(repository.fetchUserList).toHaveBeenCalled();
      expect(repository.updateUser).toHaveBeenCalledWith(targetUser.id, targetUser);
      expect(actions).toEqual(expected);
    });

    it('store に userList がある場合は userRepository.fetchUserList が call されない', async () => {
      const newState: State = { ...initialState, [userStoreFeatureName]: { userList, user: null } };
      store$.setState(newState);

      const saveUserListAction = userActions.saveUserList({ userList });
      const expected = [saveUserListAction];

      const actions: Action[] = [];
      store$.scannedActions$.pipe(skip(1)).subscribe((action) => actions.push(action));
      await usecase.updateUser(targetUser);

      expect(repository.fetchUserList).not.toHaveBeenCalled();
      expect(repository.updateUser).toHaveBeenCalledWith(targetUser.id, targetUser);
      expect(actions).toEqual(expected);
    });
  });
});
