import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HeroGateway } from '../../../../data-access/gateways/hero.gateway';
import { Hero } from '../../../../domain/hero';
import { ActivatedRouteStub } from '../../../../testing/activated-route-stub';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroDetailUsecase } from './hero-detail.usecase';

class MockHeroGateway implements Partial<HeroGateway> {
  getHero(): any {}
  putHero(): any {}
}

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let activatedRoute: ActivatedRouteStub;
  let usecase: HeroDetailUsecase;
  let location: Location;

  beforeEach(async () => {
    activatedRoute = new ActivatedRouteStub({});

    await TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRoute }],
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

    it('component が作成されたときに URL に id がある場合 usecase の fetchHero が呼ばれること', () => {
      const expectedHeroId = 1;
      activatedRoute.setParamMap({ id: expectedHeroId });
      spyOn(usecase, 'fetchHero');
      fixture.detectChanges();

      expect(usecase.fetchHero).toHaveBeenCalledWith(expectedHeroId);
    });

    it('component が作成されたときに URL に id がない場合 usecase の fetchHero が呼ばれないこと', () => {
      spyOn(usecase, 'fetchHero');
      fixture.detectChanges();

      expect(usecase.fetchHero).not.toHaveBeenCalled();
    });
  });

  describe('ngOnDestroy', () => {
    it('component が破棄されるときに component._route.paramMap の購読もやめるので 3 回目の state 変更では usecase.fetchHero は呼ばれない', () => {
      spyOn(usecase, 'fetchHero');

      activatedRoute.setParamMap({ id: '1' });
      fixture.detectChanges();
      activatedRoute.setParamMap({ id: '2' });
      fixture.detectChanges();

      component.ngOnDestroy();

      activatedRoute.setParamMap({ id: '3' });
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
