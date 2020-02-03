import { createAction, createFeatureSelector, createReducer, createSelector, on, props, Store, union } from '@ngrx/store';
import { User } from '../../user-list/domain/user-list';

// helper
export const createFeatureStoreSelector = <T>(fName: string) => {
  return <S>(store$: Store<{}>, mappingFunction: (state: T) => S) => {
    return store$.select(createSelector(createFeatureSelector<T>(fName), mappingFunction));
  };
};

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
const userListReducer = createReducer(
  initialState,
  on(saveUserList, (state, { userList }) => ({ ...state, userList })),
);

export default function reducer(state: State, action: typeof actionsUnion): State {
  return userListReducer(state, action);
}

// NOTE: Selectors
export const featureName = 'userList';
export const selectStore = createFeatureStoreSelector<State>(featureName);
