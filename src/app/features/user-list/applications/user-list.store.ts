import { createAction, createReducer, on, props, union } from '@ngrx/store';
import { User } from '../domain/user-list';

// NOTE: State
export interface State {
  userList: User[] | null;
}

export const initialState: State = {
  userList: null,
};

// NOTE: Actions
export const saveUserList = createAction('[UserList] save', props<{ userList: User[] }>());

export const actions = { saveUserList };
const actionsUnion = union(actions);

// NOTE: Reducer
const userListReducer = createReducer(initialState, on(saveUserList, (state, { userList }) => ({ ...state, userList })));

export default function reducer(state: State, action: typeof actionsUnion): State {
  return userListReducer(state, action);
}

// NOTE: Selectors
export const featureName = 'userList';
