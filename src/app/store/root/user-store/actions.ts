import { createAction, union } from '@ngrx/store';

export const saveRequest = createAction('[User] save request');
export const saveSuccess = createAction('[User] save success', (payload: any) => ({ payload }));
const actions = union({ saveRequest, saveSuccess });

export type ActionsUnion = typeof actions;
