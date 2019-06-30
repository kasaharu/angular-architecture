import { createFeatureSelector } from '@ngrx/store';
import { Album } from '../../../core/models';

export interface State {
  albumList: Album[] | null;
}

export const initialState: State = {
  albumList: null,
};

export const selectAlbumFeature = createFeatureSelector<State>('album');
