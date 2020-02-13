import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserQuery } from '../../../applications/user.query';
import { UserUsecase } from '../../../applications/user.usecase';
import { UsersSummaryComponent } from './users-summary.component';

class MockUserUsecase implements Partial<UserUsecase> {
  async initializeSummary() {}
}

class MockUserQuery implements Partial<UserQuery> {}

describe('UserListComponent', () => {
  let component: UsersSummaryComponent;
  let fixture: ComponentFixture<UsersSummaryComponent>;
  let usecase: UserUsecase;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [UsersSummaryComponent],
      providers: [
        { provide: UserUsecase, useClass: MockUserUsecase },
        { provide: UserQuery, useClass: MockUserQuery },
      ],
    }).compileComponents();

    usecase = TestBed.inject(UserUsecase);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSummaryComponent);
    component = fixture.componentInstance;

    spyOn(usecase, 'initializeSummary');
    fixture.detectChanges();
  });

  describe('component の初期化', () => {
    it('component が生成されていること', () => {
      expect(component).toBeTruthy();
    });

    it('usecase initializeSummary が呼ばれていること', () => {
      expect(usecase.initializeSummary).toHaveBeenCalled();
    });
  });
});
