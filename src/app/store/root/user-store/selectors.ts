import { createSelector } from '@ngrx/store';
import { selectUserFeature } from './state';

export const selectUserList = createSelector(
  selectUserFeature,
  (state) => state.userList,
);
export const selectSelectedUser = createSelector(
  selectUserFeature,
  (state) => state.selectedUser,
);
