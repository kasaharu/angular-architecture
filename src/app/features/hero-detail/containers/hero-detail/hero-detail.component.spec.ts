import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hero } from '../../../../domain/hero';
import { HeroDetailStore } from '../../applications/hero-detail.store';
import { HeroDetailUsecase } from '../../applications/hero-detail.usecase';
import { HeroDetailComponent } from './hero-detail.component';

class MockHeroDetailUsecase implements Partial<HeroDetailUsecase> {
  fetchHero(): any {}
  updateHero(): any {}
}

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let componentStore: HeroDetailStore;
  let usecase: HeroDetailUsecase;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
    })
      .overrideComponent(HeroDetailComponent, {
        add: { providers: [HeroDetailStore, { provide: HeroDetailUsecase, useClass: MockHeroDetailUsecase }] },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    componentStore = fixture.debugElement.injector.get(HeroDetailStore);
    usecase = fixture.debugElement.injector.get(HeroDetailUsecase);
    location = TestBed.inject(Location);
  });

  describe('ngOnInit', () => {
    it('component が作成されたこと', () => {
      expect(component).toBeTruthy();
    });

    it('component が作成されたときに store に id が保存されている場合 usecase の fetchHero が呼ばれること', () => {
      const heroId = 1;
      componentStore.setState({ id: heroId, hero: null });
      spyOn(usecase, 'fetchHero');
      fixture.detectChanges();

      expect(usecase.fetchHero).toHaveBeenCalledWith(heroId);
    });
  });

  describe('ngOnDestroy', () => {
    it('component が破棄されるときに component.id$ の購読もやめるので 3 回目の state 変更では usecase.fetchHero は呼ばれない', () => {
      spyOn(usecase, 'fetchHero');

      componentStore.setState({ id: 1, hero: null });
      fixture.detectChanges();
      componentStore.setState({ id: 2, hero: null });
      fixture.detectChanges();

      component.ngOnDestroy();

      componentStore.setState({ id: 3, hero: null });
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
      spyOn(location, 'back');
      await component.save(hero);
      expect(location.back).toHaveBeenCalled();
    });
  });
});
