import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList$: Observable<any>;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userList$ = this.userService.fetchUserList();
  }
}
