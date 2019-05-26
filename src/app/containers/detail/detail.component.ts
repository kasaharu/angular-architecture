import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Todo, User } from '../../core/models';
import { TodoQuery } from '../../queries/todo.query';
import { UserQuery } from '../../queries/user.query';
import { DetailUsecase } from '../../usecases/detail.usecase';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private userQuery: UserQuery, private todoQuery: TodoQuery, private usecase: DetailUsecase) {}

  user$: Observable<User> = this.userQuery.selectedUser$;
  todoList$: Observable<Todo[]> = this.todoQuery.todoList$;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      this.usecase.initialize(id);
    });
  }
}
