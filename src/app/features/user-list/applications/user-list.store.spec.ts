import reducer, { actions, State } from './user-list.store';
import { User } from '../domain/user-list';

describe('userList reducer', () => {
  it('action type : saveUserList', () => {
    const updatedState: User[] = [
      {
        id: 1,
        name: 'name',
        username: 'username',
        email: 'email',
        address: { street: 'street', suite: 'suite', city: 'city', zipcode: 'zipcode', geo: { lat: 0, lng: 0 } },
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
