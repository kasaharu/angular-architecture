import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../core/models';
import { TodoQuery } from '../../queries/todo.query';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor(private todoQuery: TodoQuery) {}

  todoList$: Observable<Todo[] | null> = this.todoQuery.todoList$;

  ngOnInit() {}
}
