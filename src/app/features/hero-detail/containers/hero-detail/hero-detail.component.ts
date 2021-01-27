import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { HeroDetailStore } from '../../applications/hero-detail.store';
import { HeroDetailUsecase } from '../../applications/hero-detail.usecase';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailComponent implements OnInit {
  constructor(
    private readonly _location: Location,
    private readonly _componentStore: HeroDetailStore,
    private readonly _usecase: HeroDetailUsecase,
  ) {}

  id$ = this._componentStore.id$;
  hero$ = this._componentStore.hero$;

  ngOnInit(): void {
    this.id$
      .pipe(
        filter((stream) => stream !== null),
        map((id) => id as number),
      )
      .subscribe((id) => {
        this._usecase.fetchHero(id);
      });
  }

  goBack(): void {
    this._location.back();
  }
}
