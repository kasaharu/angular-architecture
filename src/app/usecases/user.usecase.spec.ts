import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { skip } from 'rxjs/operators';
import { User } from '../core/models';
import { UserRepository } from '../infrastructures/repositories/user.repository';
import { UserStoreActions } from '../store/root/user-store';
import { UserUsecase } from './user.usecase';

class MockUserRepository {
  fetchUserList() {}
}

describe('UserUsecase', () => {
  let repository: UserRepository;
  let usecase: UserUsecase;
  let store$: MockStore<{}>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: UserRepository, useClass: MockUserRepository },
        provideMockStore({
          initialState: {
            user: {
              userList: null,
            },
          },
        }),
      ],
    });

    repository = TestBed.get(UserRepository);
    usecase = TestBed.get(UserUsecase);
    store$ = TestBed.get(Store);
    spyOn(store$, 'dispatch').and.callThrough();
  });

  it('should create an instance', () => {
    expect(usecase).toBeTruthy();
  });

  it('call initialize() method', async () => {
    const userList: User[] = [
      {
        id: 1,
        name: '',
        username: '',
        email: '',
        address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: 0, lng: 0 } },
        phone: '',
        website: '',
        company: { name: '', catchPhrase: '', bs: '' },
      },
    ];
    const saveAction = UserStoreActions.saveUserList(userList);
    const calledActionList = [saveAction];

    spyOn(repository, 'fetchUserList').and.returnValue(of(userList));
    const actions: any = [];
    store$.scannedActions$.pipe(skip(1)).subscribe((action) => actions.push(action));
    await usecase.initialize();

    expect(actions).toEqual(calledActionList);
  });
});
