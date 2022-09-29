import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Hero } from '../../domain/hero';
import { MessageService } from '../../shared/services/message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private readonly _http: HttpClient, private readonly _messageService: MessageService) {}

  private _heroesUrl = 'api/heroes';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  getHeroes(): Observable<Hero[]> {
    return this._http.get<Hero[]>(this._heroesUrl).pipe(
      tap((_) => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', [])),
    );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this._heroesUrl}/${id}`;

    return this._http.get<Hero>(url).pipe(
      tap((_) => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`)),
    );
  }

  updateHero(hero: Hero): Observable<any> {
    return this._http.put(this._heroesUrl, hero, this.httpOptions).pipe(
      tap((_) => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero')),
    );
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
