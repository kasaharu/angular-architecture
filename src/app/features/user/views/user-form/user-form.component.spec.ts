import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { createMockUser } from '../../../../testing/factories/user';
import { User } from '../../domain/user';
import { UserFormComponent } from './user-form.component';

@Component({
  template: `
    <app-user-form [user]="user"></app-user-form>
  `,
})
class TestComponent {
  constructor() {}
  user: User = createMockUser({});
}

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [UserFormComponent, TestComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.debugElement.query(By.directive(UserFormComponent)).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call clickButton', () => {
    spyOn(component.updateUser, 'emit');
    component.clickButton();
    expect(component.updateUser.emit).toHaveBeenCalledWith(component.userInfoForm.value);
  });
});
