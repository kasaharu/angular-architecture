import { createAction, union } from '@ngrx/store';
import { User } from '../../../core/models';

export const saveUserList = createAction('[User] save user list', (payload: User[]) => ({ payload }));
const actions = union({ saveUserList: saveUserList });

export type ActionsUnion = typeof actions;
