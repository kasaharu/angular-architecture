import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../../../core/models';

export interface State {
  user: User[] | null;
}

export const initialState: State = {
  user: null,
};

export const selectUserFeature = createFeatureSelector<State>('user');
export const selectUser = createSelector(
  selectUserFeature,
  (state) => state.user,
);
