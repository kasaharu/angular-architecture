import { Route } from '@angular/router';
import { HeroDetailPageComponent } from './pages/hero-detail/hero-detail.component';

const HERO_DETAIL_ROUTES: Route[] = [{ path: ':id', component: HeroDetailPageComponent }];
export default HERO_DETAIL_ROUTES;
