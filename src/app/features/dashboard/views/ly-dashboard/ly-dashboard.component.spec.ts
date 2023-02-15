import { By } from '@angular/platform-browser';
import { render, screen } from '@testing-library/angular';
import { Hero } from '../../../../domain/hero';
import { HeroService } from '../../../../infrastructures/api/hero.service';
import { HeroSearchComponent } from '../../containers/hero-search/hero-search.component';
import { LyDashboardComponent } from './ly-dashboard.component';

class MockHeroService {}

describe('LyDashboardComponent', () => {
  const provideHeroService = [{ provide: HeroService, useClass: MockHeroService }];

  describe('hero 一覧の表示', () => {
    it('heroes が Input で渡されたとき hero 一覧のリンクが表示されること', async () => {
      const heroName = 'test hero';
      const heroes: Hero[] = [{ id: 1, name: heroName }];
      await render(LyDashboardComponent, { providers: provideHeroService, componentProperties: { heroes } });

      expect(screen.getByRole('link', { name: heroName, suggest: true })).toBeTruthy();
    });

    it('空の heroes が Input で渡されたとき hero 一覧のリンクが表示されないこと', async () => {
      const heroes: Hero[] = [];
      const { queryByRole } = await render(LyDashboardComponent, { providers: provideHeroService, componentProperties: { heroes } });

      expect(queryByRole('link')).toBe(null);
    });
  });

  it('HeroSearchComponent が表示されること', async () => {
    const { fixture } = await render(LyDashboardComponent, { providers: provideHeroService });
    const heroSearchElem = fixture.debugElement.query(By.directive(HeroSearchComponent));

    expect(heroSearchElem).toBeTruthy();
  });
});
