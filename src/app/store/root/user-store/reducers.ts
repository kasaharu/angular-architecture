import * as Actions from './actions';
import { initialState, State } from './state';

export function userReducer(state: State = initialState, action: Actions.ActionsUnion): State {
  switch (action.type) {
    case Actions.saveUserList.type: {
      return {
        ...state,
        userList: action.payload,
      };
    }
    case Actions.saveSelectedUser.type: {
      return {
        ...state,
        selectedUser: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
