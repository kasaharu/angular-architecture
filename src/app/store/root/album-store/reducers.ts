import * as Actions from './actions';
import { initialState, State } from './state';

export function albumReducer(state: State = initialState, action: Actions.ActionsUnion): State {
  switch (action.type) {
    case Actions.saveAlbumList.type: {
      return {
        ...state,
        albumList: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
