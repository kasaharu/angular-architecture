import * as Actions from './actions';
import { initialState, State } from './state';

export function postReducer(state: State = initialState, action: Actions.ActionsUnion): State {
  switch (action.type) {
    case Actions.savePostList.type: {
      return {
        ...state,
        postList: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
