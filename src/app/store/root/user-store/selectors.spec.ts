import { selectSelectedUser, selectUserList } from './selectors';
import { State } from './state';

describe('UserStoreSelector', () => {
  it('exec selectUserList', () => {
    const userList = [
      {
        id: 1,
        name: '',
        username: '',
        email: '',
        address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: 0, lng: 0 } },
        phone: '',
        website: '',
        company: { name: '', catchPhrase: '', bs: '' },
      },
    ];
    const state: State = {
      userList,
      selectedUser: null,
    };
    expect(selectUserList.projector(state)).toEqual(userList);
  });

  it('exec selectSelectedUser', () => {
    const selectedUser = {
      id: 1,
      name: '',
      username: '',
      email: '',
      address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: 0, lng: 0 } },
      phone: '',
      website: '',
      company: { name: '', catchPhrase: '', bs: '' },
    };
    const state: State = {
      userList: null,
      selectedUser,
    };
    expect(selectSelectedUser.projector(state)).toEqual(selectedUser);
  });
});
