import reducer, { actions, State } from './user-list.store';

describe('userList reducer', () => {
  it('action type : saveUserList', () => {
    const state: State = { userList: null };
    const updatedState = null;
    const result = reducer(state, actions.saveUserList({ userList: updatedState }));

    expect(result).toEqual({ userList: updatedState });
  });
});