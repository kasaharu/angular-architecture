import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../../core/models';
import { TodoQuery } from '../../queries/todo.query';
import { TodoComponent } from './todo.component';

class MockTodoQuery {
  todoList$ = new BehaviorSubject<Todo[] | null>(null);
}

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: TodoQuery, useClass: MockTodoQuery }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
