import { Component, OnInit } from '@angular/core';
import { UserListUsecase } from '../../applications/user-list.usecase';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private usecase: UserListUsecase) {}

  ngOnInit() {
    this.usecase.initialize();
  }
}
