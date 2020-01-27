import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { User } from '../domain/user-list';
import reducer, { actions, createFeatureStoreSelector, State } from './user-list.store';

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
    const state: State = { userList: updatedState };
    const result = reducer(state, actions.saveUserList({ userList: updatedState }));

    expect(result).toEqual({ userList: updatedState });
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
