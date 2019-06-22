import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../core/models';

@Injectable({
  providedIn: 'root',
})
export class AlbumRepository {
  constructor(private http: HttpClient) {}

  fetchAlbumListBy(userId: number): Observable<Album[]> {
    return this.http.get<Album[]>(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  }
}
