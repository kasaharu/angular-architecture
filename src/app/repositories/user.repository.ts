import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../core/models';

@Injectable({
  providedIn: 'root',
})
export class UserRepository {
  constructor(private http: HttpClient) {}

  fetchUserList(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
