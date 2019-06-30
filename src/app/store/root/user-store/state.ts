import { createFeatureSelector } from '@ngrx/store';
import { User } from '../../../core/models';

export interface State {
  userList: User[] | null;
  selectedUser: User | null;
}

export const initialState: State = {
  userList: null,
  selectedUser: null,
};

export const selectUserFeature = createFeatureSelector<State>('user');
