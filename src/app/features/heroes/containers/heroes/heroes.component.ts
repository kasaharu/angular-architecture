import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeroesStore } from '../../applications/heroes.store';
import { HeroesUsecase } from '../../applications/heroes.usecase';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HeroesStore, HeroesUsecase],
})
export class HeroesComponent implements OnInit {
  constructor(private readonly _componentStore: HeroesStore, private readonly _usecase: HeroesUsecase) {}

  heroes$ = this._componentStore.heroes$;

  ngOnInit(): void {
    this._usecase.fetchHeroes();
  }
}
