import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserListQuery } from '../../../applications/user-list.query';
import { UserListUsecase } from '../../../applications/user-list.usecase';
import { UserListComponent } from './user-list.component';

class MockUserListUsecase implements Partial<UserListUsecase> {
  async initialize() {}
}

class MockUserListQuery implements Partial<UserListQuery> {}

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let usecase: UserListUsecase;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [UserListComponent],
      providers: [
        { provide: UserListUsecase, useClass: MockUserListUsecase },
        { provide: UserListQuery, useClass: MockUserListQuery },
      ],
    }).compileComponents();

    usecase = TestBed.get(UserListUsecase);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;

    spyOn(usecase, 'initialize');
    fixture.detectChanges();
  });

  describe('component の初期化', () => {
    it('component が生成されていること', () => {
      expect(component).toBeTruthy();
    });

    it('usecase initialize が呼ばれていること', () => {
      expect(usecase.initialize).toHaveBeenCalled();
    });
  });
});
