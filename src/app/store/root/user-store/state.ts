import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../../../core/models';

export interface State {
  userList: User[] | null;
  selectedUser: User | null;
}

export const initialState: State = {
  userList: null,
  selectedUser: null,
};

export const selectUserFeature = createFeatureSelector<State>('user');
export const selectUserList = createSelector(
  selectUserFeature,
  (state) => state.userList,
);
export const selectSelectedUser = createSelector(
  selectUserFeature,
  (state) => state.selectedUser,
);
