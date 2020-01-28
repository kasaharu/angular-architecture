import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { UserQuery } from '../../applications/user.query';
import { UserUsecase } from '../../applications/user.usecase';
import { User } from '../../domain/user';
import { UserComponent } from './user.component';

class StubUserQuery {
  user$ = new BehaviorSubject<User | null>(null);
}

class StubUserUsecase {
  async initialize() {}
}

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [
        { provide: UserQuery, useClass: StubUserQuery },
        { provide: UserUsecase, useClass: StubUserUsecase },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
