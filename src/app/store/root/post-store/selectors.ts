import { createSelector } from '@ngrx/store';
import { selectPostFeature } from './state';

export const selectPostList = createSelector(
  selectPostFeature,
  (state) => state.postList,
);
