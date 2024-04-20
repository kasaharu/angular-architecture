import { ApplicationConfig } from '@angular/core';
import { By } from '@angular/platform-browser';
import { render, screen } from '@testing-library/angular';
import { Hero } from '../../../../domain/hero';
import { HeroApi } from '../../../../infrastructures/api/hero.api';
import { HeroSearchComponent } from '../../containers/hero-search/hero-search.component';
import { LyDashboardComponent } from './ly-dashboard.component';

class MockHeroService {}

describe('LyDashboardComponent', () => {
  const appConfig: ApplicationConfig = { providers: [{ provide: HeroApi, useClass: MockHeroService }] };

  describe('hero 一覧の表示', () => {
    it('heroes が Input で渡されたとき hero 一覧のリンクが表示されること', async () => {
      const heroName = 'test hero';
      const heroes: Hero[] = [{ id: 1, name: heroName }];
      await render(LyDashboardComponent, { ...appConfig, componentInputs: { heroes: heroes } });

      expect(screen.getByRole('link', { name: heroName, suggest: true })).toBeTruthy();
    });

    it('空の heroes が Input で渡されたとき hero 一覧のリンクが表示されないこと', async () => {
      const heroes: Hero[] = [];
      const { queryByRole } = await render(LyDashboardComponent, { ...appConfig, componentInputs: { heroes } });

      expect(queryByRole('link')).toBe(null);
    });
  });

  it('HeroSearchComponent が表示されること', async () => {
    const heroes: Hero[] = [];
    const { fixture } = await render(LyDashboardComponent, { ...appConfig, componentInputs: { heroes } });
    const heroSearchElem = fixture.debugElement.query(By.directive(HeroSearchComponent));

    expect(heroSearchElem).toBeTruthy();
  });
});
