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
    this._messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
