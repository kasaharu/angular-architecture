import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Album } from '../../../core/models';

export interface State {
  albumList: Album[] | null;
}

export const initialState: State = {
  albumList: null,
};

export const selectTodoFeature = createFeatureSelector<State>('album');

export const selectTodoList = createSelector(
  selectTodoFeature,
  (state) => state.albumList,
);
