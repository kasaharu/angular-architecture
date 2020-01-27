import { createAction, createReducer, on, props, union } from '@ngrx/store';
import { User } from '../domain/user';

// NOTE: State
export interface State {
  user: User | null;
}

export const initialState: State = {
  user: null,
};

// NOTE: Actions
export const saveUser = createAction('[User] save', props<{ user: User }>());

export const actions = { saveUser };
const actionsUnion = union(actions);

// NOTE: Reducer
const userReducer = createReducer(
  initialState,
  on(saveUser, (state, { user }) => ({ ...state, user })),
);

export default function reducer(state: State, action: typeof actionsUnion): State {
  return userReducer(state, action);
}

// NOTE: Selectors
export const featureName = 'user';
