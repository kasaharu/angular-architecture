import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Post } from '../../../core/models';

export interface State {
  postList: Post[] | null;
}

export const initialState: State = {
  postList: null,
};

export const selectTodoFeature = createFeatureSelector<State>('post');

export const selectTodoList = createSelector(
  selectTodoFeature,
  (state) => state.postList,
);
