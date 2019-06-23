import { TestBed } from '@angular/core/testing';

import { PostQuery } from './post.query';

describe('PostQuery', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const query: PostQuery = TestBed.get(PostQuery);
    expect(query).toBeTruthy();
  });
});
