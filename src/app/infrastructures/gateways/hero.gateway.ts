import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Hero } from '../../domain/hero';
import { MessageService } from '../../shared/services/message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroGateway {
  constructor(private readonly _http: HttpClient, private readonly _messageService: MessageService) {}
  private _heroesUrl = 'api/heroes';

  getHeroes(): Observable<Hero[]> {
    return this._http.get<Hero[]>(this._heroesUrl).pipe(tap((_) => this._log('fetched heroes')));
  }

  getHero(id: number): Observable<Hero> {
    return this._http.get<Hero>(`${this._heroesUrl}/${id}`).pipe(tap((_) => this._log(`fetched hero id=${id}`)));
  }

  private _log(message: string): void {
    this._messageService.add(`HeroService: ${message}`);
  }
}
