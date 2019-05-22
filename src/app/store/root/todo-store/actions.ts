import { createAction, union } from '@ngrx/store';
import { Todo } from '../../../core/models';

export const saveTodoList = createAction('[Todo] save todo list', (payload: Todo[]) => ({ payload }));

const actions = union({ saveTodoList });

export type ActionsUnion = typeof actions;
