import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AlbumRepository } from './album.repository';
import { Album } from '../core/models';

describe('AlbumRepository', () => {
  let repository: AlbumRepository;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    repository = TestBed.get(AlbumRepository);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(repository).toBeTruthy();
  });

  it('call fetchAlbumListBy() method', () => {
    const payload: Album[] = [];
    const userId = 1;
    repository.fetchAlbumListBy(userId).subscribe((result) => expect(result).toEqual(payload));

    const req = httpTestingController.expectOne(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    expect(req.request.method).toEqual('GET');
    req.flush(payload);
    httpTestingController.verify();
  });
});
