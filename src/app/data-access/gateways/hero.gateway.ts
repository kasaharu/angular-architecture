import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

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

  putHero(hero: Hero): Observable<any> {
    return this._http.put(this._heroesUrl, hero, this.httpOptions).pipe(
      tap((_) => this._log(`updated hero id=${hero.id}`)),
      catchError(this._handleError<any>('putHero')),
    );
  }

  postHero(hero: Hero): Observable<Hero> {
    return this._http.post<Hero>(this._heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this._log(`added hero w/ id=${newHero.id}`)),
      catchError(this._handleError<Hero>('postHero')),
    );
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const requestUrl = `${this._heroesUrl}/${id}`;

    return this._http.delete<Hero>(requestUrl, this.httpOptions).pipe(
      tap((_) => this._log(`deleted hero id=${id}`)),
      catchError(this._handleError<Hero>('deleteHero')),
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
