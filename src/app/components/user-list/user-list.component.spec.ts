import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { User } from '../../core/models';
import { UserQuery } from '../../queries/user.query';
import { UserUsecase } from '../../usecases/user.usecase';
import { UserListComponent } from './user-list.component';

class MockUserQuery {
  userList$ = new BehaviorSubject<User | null>(null);
}

class MockUserUsecase {
  initialize() {}
}

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [{ provide: UserQuery, useClass: MockUserQuery }, { provide: UserUsecase, useClass: MockUserUsecase }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
