import { createSelector } from '@ngrx/store';
import { selectAlbumFeature } from './state';

export const selectAlbumList = createSelector(
  selectAlbumFeature,
  (state) => state.albumList,
);
