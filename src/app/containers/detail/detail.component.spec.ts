import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';

import { User } from '../../core/models';
import { UserQuery } from '../../queries/user.query';
import { DetailUsecase } from '../../usecases/detail.usecase';
import { DetailComponent } from './detail.component';

class MockUserQuery {
  selectedUser$ = new BehaviorSubject<User | null>(null);
}

class MockDetailUsecase {
  initialize() {}
}

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: UserQuery, useClass: MockUserQuery }, { provide: DetailUsecase, useClass: MockDetailUsecase }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
