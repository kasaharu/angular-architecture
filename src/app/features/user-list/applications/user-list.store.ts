import { createAction, createReducer, on, union } from '@ngrx/store';

// NOTE: State
export interface State {
  userList: any | null;
}

export const initialState: State = {
  userList: null,
};

// NOTE: Actions
export const saveUserList = createAction('[UserList] save', (payload: any) => ({ payload }));

export const actions = { saveUserList };
const actionsUnion = union(actions);

// NOTE: Reducer
const userListReducer = createReducer(initialState, on(saveUserList, (state, action) => ({ ...state, userList: action.payload })));

export default function reducer(state: State, action: typeof actionsUnion): State {
  return userListReducer(state, action);
}

// NOTE: Selectors
export const featureName = 'userList';