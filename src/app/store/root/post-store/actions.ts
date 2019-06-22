import { createAction, union } from '@ngrx/store';
import { Post } from '../../../core/models';

export const savePostList = createAction('[Post] save post list', (payload: Post[]) => ({ payload }));

const actions = union({ savePostList });

export type ActionsUnion = typeof actions;
