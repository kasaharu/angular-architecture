import { TestBed } from '@angular/core/testing';
import { Action, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { skip } from 'rxjs/operators';
import { UserRepository } from '../../../infrastructures/repositories/user.repository';
import { User } from '../domain/user';
import { actions as userActions } from './user.store';
import { UserUsecase } from './user.usecase';

class MockUserRepository {
  fetchUser() {}
}

describe('UserUsecase', () => {
  let usecase: UserUsecase;
  let repository: UserRepository;
  let store$: MockStore<{}>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({}), { provide: UserRepository, useClass: MockUserRepository }],
    });

    usecase = TestBed.get(UserUsecase);
    repository = TestBed.get(UserRepository);
    store$ = TestBed.get(Store);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });

  it('call initialize()', async () => {
    const user: User = {
      id: 1,
      name: 'Test Taro',
      username: 'Taro',
      email: 'taro@aaa.com',
      address: { street: 'street', suite: 'suite', city: 'test city', zipcode: '000-0000', geo: { lat: '-10.0001', lng: '10.0001' } },
      phone: '',
      website: '',
      company: { name: '', catchPhrase: '', bs: '' },
    };

    spyOn(repository, 'fetchUser').and.returnValue(of(user));

    const saveUserAction = userActions.saveUser({ user });
    const expected = [saveUserAction];

    const actions: Action[] = [];
    store$.scannedActions$.pipe(skip(1)).subscribe((action) => actions.push(action));

    await usecase.initialize();

    expect(actions).toEqual(expected);
  });
});
