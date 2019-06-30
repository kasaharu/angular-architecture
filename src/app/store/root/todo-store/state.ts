import { createFeatureSelector } from '@ngrx/store';
import { Todo } from '../../../core/models';

export interface State {
  todoList: Todo[] | null;
}

export const initialState: State = {
  todoList: null,
};

export const selectTodoFeature = createFeatureSelector<State>('todo');
