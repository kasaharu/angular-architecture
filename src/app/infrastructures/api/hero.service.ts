import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
    this._messageService.add('HeroService: fetched heroes');
    return this._http.get<Hero[]>(this._heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    this._messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
