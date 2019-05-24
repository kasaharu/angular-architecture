import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Todo } from '../../../core/models';

export interface State {
  todoList: Todo[] | null;
}

export const initialState: State = {
  todoList: null,
};

export const selectTodoFeature = createFeatureSelector<State>('todo');

export const selectTodoList = createSelector(
  selectTodoFeature,
  (state) => state.todoList,
);
