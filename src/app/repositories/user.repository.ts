import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserRepository {
  constructor(private http: HttpClient) {}

  fetchUserList() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }
}
