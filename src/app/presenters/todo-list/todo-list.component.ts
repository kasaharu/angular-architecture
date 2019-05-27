import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/core/models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input()
  todoList: Todo[];

  constructor() {}

  ngOnInit() {}
}
