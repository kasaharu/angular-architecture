import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Hero } from '../../domain/hero';
import { MessageService } from '../../shared/services/message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroGateway {
  constructor(private readonly _http: HttpClient, private readonly _messageService: MessageService) {}
  private _heroesUrl = 'api/heroes';

  getHeroes(): Observable<Hero[]> {
    return this._http.get<Hero[]>(this._heroesUrl).pipe(
      tap((_) => this._log('fetched heroes')),
      catchError(this._handleError<Hero[]>('getHeroes', [])),
    );
  }

  getHero(id: number): Observable<Hero> {
    return this._http.get<Hero>(`${this._heroesUrl}/${id}`).pipe(
      tap((_) => this._log(`fetched hero id=${id}`)),
      catchError(this._handleError<Hero>(`getHero id=${id}`)),
    );
  }

  private _log(message: string): void {
    this._messageService.add(`HeroService: ${message}`);
  }

  private _handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this._log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
