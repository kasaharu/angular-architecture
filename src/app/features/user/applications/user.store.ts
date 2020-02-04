import { createAction, createFeatureSelector, createReducer, createSelector, on, props, Store, union } from '@ngrx/store';
import { User } from '../domain/user';

// helper
export const createFeatureStoreSelector = <T>(fName: string) => {
  return <S>(store$: Store<{}>, mappingFunction: (state: T) => S) => {
    return store$.select(createSelector(createFeatureSelector<T>(fName), mappingFunction));
  };
};

// NOTE: State
export interface State {
  user: User | null;
  userList: User[] | null;
}

export const initialState: State = {
  user: null,
  userList: null,
};

// NOTE: Actions
export const saveUser = createAction('[User] save', props<{ user: User | null }>());
export const saveUserList = createAction('[UserList] save', props<{ userList: User[] }>());

export const actions = { saveUser, saveUserList };
const actionsUnion = union(actions);

// NOTE: Reducer
const userReducer = createReducer(
  initialState,
  on(saveUser, (state, { user }) => ({ ...state, user })),
  on(saveUserList, (state, { userList }) => ({ ...state, userList })),
);

export default function reducer(state: State, action: typeof actionsUnion): State {
  return userReducer(state, action);
}

// NOTE: Selectors
export const featureName = 'user';
export const selectStore = createFeatureStoreSelector<State>(featureName);
