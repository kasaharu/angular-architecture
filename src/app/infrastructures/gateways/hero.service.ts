import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from '../../shared/services/message.service';
import { Hero } from '../../domain/hero';
import { HEROES } from '../../mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private readonly _messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this._log('fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero | null> {
    this._log(`fetched hero id=${id}`);
    return of(HEROES.find((hero) => hero.id === id) || null);
  }

  private _log(message: string): void {
    this._messageService.add(`HeroService: ${message}`);
  }
}
