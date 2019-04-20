import * as Actions from './actions';
import { initialState, State } from './state';

export function userReducer(state: State = initialState, action: Actions.ActionsUnion) {
  switch (action.type) {
    case Actions.saveSuccess.type: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
