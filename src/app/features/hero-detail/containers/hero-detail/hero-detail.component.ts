import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { HeroDetailStore } from '../../applications/hero-detail.store';
import { HeroDetailUsecase } from '../../applications/hero-detail.usecase';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  constructor(
    private readonly _location: Location,
    private readonly _componentStore: HeroDetailStore,
    private readonly _usecase: HeroDetailUsecase,
  ) {}

  onDestroy$ = new Subject();

  id$ = this._componentStore.id$;
  hero$ = this._componentStore.hero$;

  ngOnInit(): void {
    this.id$
      .pipe(filter((stream): stream is number => stream !== null))
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((id) => {
        this._usecase.fetchHero(id);
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  goBack(): void {
    this._location.back();
  }
}
