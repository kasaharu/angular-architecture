import { createAction, union } from '@ngrx/store';

export const saveSuccess = createAction('[User] save success', (payload: any) => ({ payload }));
const actions = union({ saveSuccess });

export type ActionsUnion = typeof actions;
