import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../domain/hero';
import { MessageService } from '../../shared/services/message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private readonly _http: HttpClient, private readonly _messageService: MessageService) {}
  private _heroesUrl = 'api/heroes';

  getHeroes(): Observable<Hero[]> {
    this._log('fetched heroes');
    return this._http.get<Hero[]>(this._heroesUrl);
  }

  getHero(id: number): Observable<Hero | null> {
    this._log(`fetched hero id=${id}`);
    return this._http.get<Hero>(`${this._heroesUrl}/${id}`);
  }

  private _log(message: string): void {
    this._messageService.add(`HeroService: ${message}`);
  }
}
