import { createAction, union } from '@ngrx/store';
import { User } from '../../../core/models';

export const saveUserList = createAction('[User] save user list', (payload: User[]) => ({ payload }));
export const saveSelectedUser = createAction('[User] save selected user', (payload: User) => ({ payload }));

const actions = union({ saveUserList, saveSelectedUser });

export type ActionsUnion = typeof actions;
