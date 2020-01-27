import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { User } from '../domain/user';
import { UserQuery } from './user.query';
import * as UserStore from './user.store';

interface MockStoreType {
  [UserStore.featureName]: UserStore.State;
}

const initialState: MockStoreType = {
  [UserStore.featureName]: {
    user: null,
  },
};

describe('UserQuery', () => {
  let query: UserQuery;
  let store$: MockStore<MockStoreType>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
    });
    query = TestBed.get(UserQuery);
    store$ = TestBed.get(Store);
  });

  it('should be created', () => {
    expect(query).toBeTruthy();
  });

  describe('user$ の値のチェック', () => {
    it('initialState は null であること', () => {
      query.user$.subscribe((val) => expect(val).toBeNull());
    });

    it('store が更新されたら更新された値が取得できること ', () => {
      const user: User = {
        id: 1,
        name: 'name',
        username: 'username',
        email: 'email',
        address: { street: 'street', suite: 'suite', city: 'city', zipcode: 'zipcode', geo: { lat: '0', lng: '0' } },
        phone: 'phone',
        website: 'website',
        company: { name: 'company-name', catchPhrase: 'company-catchPhrase', bs: 'company-bs' },
      };
      const updateState: MockStoreType = {
        ...initialState,
        [UserStore.featureName]: {
          user,
        },
      };
      store$.setState(updateState);
      query.user$.subscribe((val) => expect(val).toEqual(user));
    });
  });
});
