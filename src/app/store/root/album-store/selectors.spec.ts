import { selectAlbumList } from './selectors';
import { State } from './state';

describe('AlbumStoreSelector', () => {
  it('exec selectAlbumList', () => {
    const albumList = [{ userId: 1, id: 1, title: '' }];
    const state: State = { albumList };
    expect(selectAlbumList.projector(state)).toEqual(albumList);
  });
});
