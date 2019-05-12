import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../../../core/models';

export interface State {
  userList: User[] | null;
}

export const initialState: State = {
  userList: null,
};

export const selectUserFeature = createFeatureSelector<State>('user');
export const selectUserList = createSelector(
  selectUserFeature,
  (state) => state.userList,
);
