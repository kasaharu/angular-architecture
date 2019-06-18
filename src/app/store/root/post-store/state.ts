import { Post } from '../../../core/models';

export interface State {
  postList: Post[] | null;
}

export const initialState: State = {
  postList: null,
};