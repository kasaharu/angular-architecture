import { Todo } from '../../../core/models';

export interface State {
  todoList: Todo[] | null;
}

export const initialState: State = {
  todoList: null,
};
