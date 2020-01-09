import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Post } from '../../core/models';
import { PostRepository } from './post.repository';

describe('PostRepository', () => {
  let repository: PostRepository;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    repository = TestBed.get(PostRepository);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(repository).toBeTruthy();
  });

  it('call fetchPostListBy() method', () => {
    const payload: Post[] = [];
    const userId = 1;
    repository.fetchPostListBy(userId).subscribe((result) => expect(result).toEqual(payload));

    const req = httpTestingController.expectOne(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    expect(req.request.method).toEqual('GET');
    req.flush(payload);
    httpTestingController.verify();
  });
});
