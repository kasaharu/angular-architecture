import { TestBed } from '@angular/core/testing';

import { PostQuery } from './post.query';
import { provideMockStore } from '@ngrx/store/testing';

describe('PostQuery', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: {
            post: {
              postList: null,
            },
          },
        }),
      ],
    });
  });

  it('should be created', () => {
    const query: PostQuery = TestBed.get(PostQuery);
    expect(query).toBeTruthy();
  });
});
