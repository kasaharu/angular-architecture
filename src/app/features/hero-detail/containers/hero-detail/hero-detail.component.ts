import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { Hero } from '../../../../domain/hero';
import { HeroDetailUsecase } from './hero-detail.usecase';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _location: Location,
    private readonly _usecase: HeroDetailUsecase,
  ) {}

  onDestroy$ = new Subject();
  hero$ = this._usecase.hero$;

  ngOnInit(): void {
    this._route.paramMap.pipe(takeUntil(this.onDestroy$)).subscribe((pmap) => {
      const id = pmap.get('id');
      if (id === null || typeof +id !== 'number') {
        // TOOD: null の場合のエラーハンドリングが必要
        return;
      }

      this._usecase.fetchHero(+id);
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  goBack(): void {
    this._location.back();
  }

  async save(hero: Hero): Promise<void> {
    await this._usecase.updateHero(hero);
    this._location.back();
  }
}
