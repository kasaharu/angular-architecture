import { createAction, union } from '@ngrx/store';
import { User } from '../../../core/models';

export const saveSuccess = createAction('[User] save success', (payload: User[]) => ({ payload }));
const actions = union({ saveSuccess });

export type ActionsUnion = typeof actions;
