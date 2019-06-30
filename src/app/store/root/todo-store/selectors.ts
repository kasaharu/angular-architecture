import { createSelector } from '@ngrx/store';
import { selectTodoFeature } from './state';

export const selectTodoList = createSelector(
  selectTodoFeature,
  (state) => state.todoList,
);
