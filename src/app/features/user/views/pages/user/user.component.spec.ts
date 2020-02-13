import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { createMockUser } from 'src/app/testing/factories/user';
import { ActivatedRouteStub } from '../../../../../testing/activated-route-stub';
import { UserQuery } from '../../../applications/user.query';
import { UserUsecase } from '../../../applications/user.usecase';
import { User } from '../../../domain/user';
import { UserComponent } from './user.component';

class StubUserQuery {
  user$ = new BehaviorSubject<User | null>(null);
}

class StubUserUsecase {
  async initializeDetail() {}
  async updateUser() {}
}

describe('UserComponent', () => {
  let fixture: ComponentFixture<UserComponent>;
  let component: UserComponent;
  let activatedRoute: ActivatedRouteStub;
  let usecase: UserUsecase;
  let router: Router;
  let routerSpy;

  beforeEach(async(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    activatedRoute = new ActivatedRouteStub();
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [UserComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: Router, useValue: routerSpy },
        { provide: UserQuery, useClass: StubUserQuery },
        { provide: UserUsecase, useClass: StubUserUsecase },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    usecase = TestBed.inject(UserUsecase);
    router = TestBed.inject(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ngOnInit', () => {
    it('activateRoute の params に何も渡されていない場合', () => {
      spyOn(usecase, 'initializeDetail');
      activatedRoute.setParamMap({});
      fixture.detectChanges();

      expect(usecase.initializeDetail).not.toHaveBeenCalled();
    });

    it('activateRoute の params に id を渡した場合', () => {
      spyOn(usecase, 'initializeDetail');
      activatedRoute.setParamMap({ id: 1 });
      fixture.detectChanges();

      expect(usecase.initializeDetail).toHaveBeenCalledWith(1);
    });
  });

  it('call updateUser', async () => {
    spyOn(usecase, 'updateUser');
    const user: User = createMockUser({});
    await component.updateUser(user);
    expect(usecase.updateUser).toHaveBeenCalledWith(user);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/users');
  });
});
