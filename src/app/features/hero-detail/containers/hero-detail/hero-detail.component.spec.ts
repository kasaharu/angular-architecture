import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroGateway } from '../../../../data-access/gateways/hero.gateway';
import { Hero } from '../../../../domain/hero';
import { HeroDetailUsecase } from '../../applications/hero-detail.usecase';
import { HeroDetailComponent } from './hero-detail.component';

class MockHeroGateway implements Partial<HeroGateway> {
  getHero(): any {}
  putHero(): any {}
}

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let usecase: HeroDetailUsecase;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
    })
      .overrideComponent(HeroDetailComponent, {
        add: { providers: [HeroDetailUsecase, { provide: HeroGateway, useClass: MockHeroGateway }] },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    usecase = fixture.debugElement.injector.get(HeroDetailUsecase);
    location = TestBed.inject(Location);
  });

  describe('ngOnInit', () => {
    it('component が作成されたこと', () => {
      expect(component).toBeTruthy();
    });

    it('component が作成されたときに store に id が保存されている場合 usecase の fetchHero が呼ばれること', () => {
      const heroId = 1;
      usecase.setState({ id: heroId, hero: null });
      spyOn(usecase, 'fetchHero');
      fixture.detectChanges();

      expect(usecase.fetchHero).toHaveBeenCalledWith(heroId);
    });
  });

  describe('ngOnDestroy', () => {
    it('component が破棄されるときに component.id$ の購読もやめるので 3 回目の state 変更では usecase.fetchHero は呼ばれない', () => {
      spyOn(usecase, 'fetchHero');

      usecase.setState({ id: 1, hero: null });
      fixture.detectChanges();
      usecase.setState({ id: 2, hero: null });
      fixture.detectChanges();

      component.ngOnDestroy();

      usecase.setState({ id: 3, hero: null });
      fixture.detectChanges();

      expect(usecase.fetchHero).toHaveBeenCalledTimes(2);
    });
  });

  describe('goBack', () => {
    it('location back が呼ばれること', () => {
      spyOn(location, 'back');
      component.goBack();
      expect(location.back).toHaveBeenCalled();
    });
  });

  describe('save', () => {
    it('usecase.updateHero が呼ばれること', async () => {
      const hero: Hero = { id: 100, name: 'hero' };
      spyOn(usecase, 'updateHero');
      await component.save(hero);
      expect(usecase.updateHero).toHaveBeenCalledWith(hero);
    });

    it('location back が呼ばれること', async () => {
      const hero: Hero = { id: 100, name: 'hero' };
      spyOn(usecase, 'updateHero');
      spyOn(location, 'back');
      await component.save(hero);
      expect(location.back).toHaveBeenCalled();
    });
  });
});
