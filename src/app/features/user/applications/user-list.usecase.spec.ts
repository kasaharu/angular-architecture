import { TestBed } from '@angular/core/testing';
import { Action, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { skip } from 'rxjs/operators';
import { UserRepository } from '../../../infrastructures/repositories/user.repository';
import { User } from '../domain/user';
import { actions as userListActions } from './user-list.store';
import { UserListUsecase } from './user-list.usecase';

describe('UserListUsecase', () => {
  let usecase: UserListUsecase;
  let store: MockStore<{}>;
  let repo: UserRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRepository, provideMockStore()],
    });

    usecase = TestBed.get(UserListUsecase);
    store = TestBed.get(Store);
    repo = TestBed.get(UserRepository);
  });

  describe('call initialize()', () => {
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
      spyOn(repo, 'fetchUserList').and.returnValue(of(userList));
    });

    it('userActions.saveUserList が dispatch されること', async () => {
      const saveUserListAction = userListActions.saveUserList({ userList });
      const expected = [saveUserListAction];

      const actions: Action[] = [];
      store.scannedActions$.pipe(skip(1)).subscribe((action) => actions.push(action));
      await usecase.initialize();

      expect(actions).toEqual(expected);
    });
  });
});
