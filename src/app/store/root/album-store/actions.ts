import { createAction, union } from '@ngrx/store';
import { Album } from '../../../core/models';

export const saveAlbumList = createAction('[Album] save album list', (payload: Album[]) => ({ payload }));

const actions = union({ saveAlbumList });

export type ActionsUnion = typeof actions;
