import { Component, computed, inject } from '@angular/core';
import { LyHeroSearchComponent } from '../../views/ly-hero-search/ly-hero-search.component';
import { HeroSearchService } from './hero-search.service';

@Component({
  selector: 'app-hero-search',
  standalone: true,
  imports: [LyHeroSearchComponent],
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
  providers: [HeroSearchService],
})
export class HeroSearchComponent {
  private readonly _service = inject(HeroSearchService);
  $heroes = computed(() => this._service.$state().heroes);

  search(term: string): void {
    this._service.search(term);
  }
}
