import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { User } from '../../domain/user';
import { UserRepository } from './user.repository';

describe('UserRepository', () => {
  let repository: UserRepository;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    repository = TestBed.inject(UserRepository);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create an instance', () => {
    expect(repository).toBeTruthy();
  });

  it('call fetchUserList() method', () => {
    const payload: User[] = [];
    repository.fetchUserList().subscribe((result) => expect(result).toEqual(payload));

    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toEqual('GET');
    req.flush(payload);
    httpTestingController.verify();
  });

  it('call fetchUser() method', () => {
    const payload: User = {
      id: 1,
      name: '',
      username: '',
      email: '',
      address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '0', lng: '0' } },
      phone: '',
      website: '',
      company: { name: '', catchPhrase: '', bs: '' },
    };
    const userId = 1;
    repository.fetchUser(userId).subscribe((result) => expect(result).toEqual(payload));

    const req = httpTestingController.expectOne(`https://jsonplaceholder.typicode.com/users/${userId}`);
    expect(req.request.method).toEqual('GET');
    req.flush(payload);
    httpTestingController.verify();
  });

  it('call updateUser() method', () => {
    const payload: User = {
      id: 1,
      name: '',
      username: '',
      email: '',
      address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '0', lng: '0' } },
      phone: '',
      website: '',
      company: { name: '', catchPhrase: '', bs: '' },
    };
    const userId = 1;
    repository.updateUser(userId, payload).subscribe((result) => expect(result).toEqual(payload));

    const req = httpTestingController.expectOne(`https://jsonplaceholder.typicode.com/users/${userId}`);
    expect(req.request.method).toEqual('PUT');
    req.flush(payload);
    httpTestingController.verify();
  });
});
