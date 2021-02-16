import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroDetailStore } from '../../applications/hero-detail.store';
import { HeroDetailUsecase } from '../../applications/hero-detail.usecase';

@Component({
  template: `<app-hero-detail></app-hero-detail>`,
  styleUrls: ['./hero-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HeroDetailStore, HeroDetailUsecase],
})
export class HeroDetailPageComponent implements OnInit {
  constructor(private readonly _route: ActivatedRoute, private readonly _usecase: HeroDetailUsecase) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe((pmap) => {
      const id = pmap.get('id');
      if (id === null) {
        // TOOD: null の場合のエラーハンドリングが必要
        return;
      }

      this._usecase.setHeroId(+id);
    });
  }
}
