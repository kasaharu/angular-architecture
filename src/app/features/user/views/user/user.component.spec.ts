import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserUsecase } from '../../applications/user.usecase';
import { UserComponent } from './user.component';

class StubUserUsecase {
  async initialize() {}
}

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [{ provide: UserUsecase, useClass: StubUserUsecase }],
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
