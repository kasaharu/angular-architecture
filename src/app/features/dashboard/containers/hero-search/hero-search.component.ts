import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Hero } from '../../../../domain/hero';
import { HeroService } from '../../../../infrastructures/api/hero.service';
import { LyHeroSearchComponent } from '../../views/ly-hero-search/ly-hero-search.component';

@Component({
  selector: 'app-hero-search',
  standalone: true,
  imports: [AsyncPipe, LyHeroSearchComponent],
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent implements OnInit {
  constructor(private readonly _heroService: HeroService) {}

  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this._heroService.searchHeroes(term)),
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
