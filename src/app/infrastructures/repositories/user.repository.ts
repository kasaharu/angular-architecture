import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../features/user-list/domain/user-list';

@Injectable({
  providedIn: 'root',
})
export class UserRepository {
  constructor(private http: HttpClient) {}

  fetchUserList(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  fetchUser(userId: number): Observable<User> {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }
}