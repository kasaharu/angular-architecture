import { TestBed } from '@angular/core/testing';

import { PostRepository } from './post.repository';

describe('PostRepository', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const repository: PostRepository = TestBed.get(PostRepository);
    expect(repository).toBeTruthy();
  });
});
