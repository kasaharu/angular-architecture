import { selectPostList } from './selectors';
import { State } from './state';

describe('PostStoreSelector', () => {
  it('exec selectPostList', () => {
    const postList = [{ userId: 1, id: 1, title: '', body: '' }];
    const state: State = { postList };
    expect(selectPostList.projector(state)).toEqual(postList);
  });
});
