import { TestBed } from '@angular/core/testing';

import { AlbumRepository } from './album.repository';

describe('AlbumRepository', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const repository: AlbumRepository = TestBed.get(AlbumRepository);
    expect(repository).toBeTruthy();
  });
});
