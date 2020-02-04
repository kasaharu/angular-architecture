import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { User } from '../domain/user';
import { UserListQuery } from './user-list.query';
import * as UserStore from './user.store';

interface MockStoreType {
  [UserStore.featureName]: UserStore.State;
}

const initialState: MockStoreType = {
  [UserStore.featureName]: {
    userList: null,
    user: null,
  },
};

describe('UserListQuery', () => {
  let query: UserListQuery;
  let store$: MockStore<MockStoreType>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
    });

    query = TestBed.get(UserListQuery);
    store$ = TestBed.get(Store);
  });

  describe('userList$ の値のチェック', () => {
    it('initialState は null であること', () => {
      query.userList$.subscribe((val) => expect(val).toBeNull());
    });

    it('initialState は null であること', () => {
      const userList: User[] = [
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
      const updateState: MockStoreType = {
        ...initialState,
        [UserStore.featureName]: {
          ...initialState[UserStore.featureName],
          userList,
        },
      };
      store$.setState(updateState);
      query.userList$.subscribe((val) => expect(val).toEqual(userList));
    });
  });
});
