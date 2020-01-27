import reducer, { actions, State } from './user.store';

describe('user reducer', () => {
  it('action type : saveUser', () => {
    const state: State = { user: null };
    const updatedState = null;
    const result = reducer(state, actions.saveUser({ user: updatedState }));

    expect(result).toEqual({ user: updatedState });
  });
});
