import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { User } from '../../core/models';
import { UserQuery } from '../../queries/user.query';
import { UserUsecase } from '../../usecases/user.usecase';
import { HomeComponent } from './home.component';

class MockUserQuery {
  userList$ = new BehaviorSubject<User | null>(null);
}

class MockUserUsecase {
  initialize() {}
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: UserQuery, useClass: MockUserQuery }, { provide: UserUsecase, useClass: MockUserUsecase }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
