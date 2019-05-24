import * as Actions from './actions';
import { initialState, State } from './state';

export function todoReducer(state: State = initialState, action: Actions.ActionsUnion): State {
  switch (action.type) {
    case Actions.saveTodoList.type: {
      return {
        ...state,
        todoList: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
