import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { User } from '../domain/user';
import reducer, { actions, createFeatureStoreSelector, State } from './user.store';

describe('user reducer', () => {
  it('action type : saveUser', () => {
    const state: State = { user: null, userList: null };
    const updatedState = null;
    const result = reducer(state, actions.saveUser({ user: updatedState }));

    expect(result).toEqual({ user: updatedState, userList: null });
  });
});

describe('userList reducer', () => {
  it('action type : saveUserList', () => {
    const updatedState: User[] = [
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
    const state: State = { userList: updatedState, user: null };
    const result = reducer(state, actions.saveUserList({ userList: updatedState }));

    expect(result).toEqual({ userList: updatedState, user: null });
  });
});

const featureName = 'testState';
interface TestType {
  foo: string;
  bar: string;
}

describe('selector-helper', () => {
  let store$: MockStore<{}>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: {
            [featureName]: { foo: 'foo', bar: 'bar' },
          },
        }),
      ],
    });

    store$ = TestBed.get(Store);
  });

  describe('createFeatureStoreSelector', () => {
    it('testState featureStore から foo を取り出す', () => {
      const selectStateFromFeature = createFeatureStoreSelector<TestType>(featureName);
      const selected = selectStateFromFeature(store$, (state) => state.foo);

      selected.subscribe((val) => expect(val).toBe('foo'));
    });
  });
});
