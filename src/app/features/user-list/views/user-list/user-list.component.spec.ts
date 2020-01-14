import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListUsecase } from '../../applications/user-list.usecase';
import { UserListComponent } from './user-list.component';
import { UserUsecase } from 'src/app/usecases/user.usecase';

class MockUserListUsecase implements Partial<UserUsecase> {
  async initialize() {}
}

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let usecase: UserListUsecase;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [{ provide: UserListUsecase, useClass: MockUserListUsecase }],
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
