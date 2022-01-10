import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private _messages$ = new BehaviorSubject<string[]>([]);

  get messages$(): Observable<string[]> {
    return this._messages$.asObservable();
  }

  add(message: string): void {
    this._messages$.next(this._messages$.value.concat(message));
  }

  clear(): void {
    this._messages$.next([]);
  }
}
