import { createAction, createReducer, on, props, union } from '@ngrx/store';

// NOTE: State
export interface State {
  userList: any | null;
}

export const initialState: State = {
  userList: null,
};

// NOTE: Actions
export const saveUserList = createAction('[UserList] save', props<{ userList: any }>());

export const actions = { saveUserList };
const actionsUnion = union(actions);

// NOTE: Reducer
const userListReducer = createReducer(initialState, on(saveUserList, (state, { userList }) => ({ ...state, userList })));

export default function reducer(state: State, action: typeof actionsUnion): State {
  return userListReducer(state, action);
}

// NOTE: Selectors
export const featureName = 'userList';
