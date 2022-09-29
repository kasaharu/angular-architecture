import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Hero } from '../../domain/hero';
import { HEROES } from '../../mock-heroes';
import { MessageService } from '../../shared/services/message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private readonly _http: HttpClient, private readonly _messageService: MessageService) {}

  private _heroesUrl = 'api/heroes';

  getHeroes(): Observable<Hero[]> {
    return this._http.get<Hero[]>(this._heroesUrl).pipe(
      tap((_) => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', [])),
    );
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    this._messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  private log(message: string): void {
    this._messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
