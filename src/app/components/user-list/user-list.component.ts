import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList$: Observable<any>;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.userList$ = this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }
}
