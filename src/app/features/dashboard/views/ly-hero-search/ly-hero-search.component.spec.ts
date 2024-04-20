import { render } from '@testing-library/angular';
import { Hero } from '../../../../domain/hero';
import { LyHeroSearchComponent } from './ly-hero-search.component';

describe('LyHeroSearchComponent', () => {
  it('should create', async () => {
    const heroes: Hero[] = [];
    const { fixture } = await render(LyHeroSearchComponent, { componentInputs: { heroes } });
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });
});
