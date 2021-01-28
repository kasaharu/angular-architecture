import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroDetailStore } from '../../applications/hero-detail.store';
import { HeroDetailUsecase } from '../../applications/hero-detail.usecase';
import { HeroDetailComponent } from './hero-detail.component';

class MockHeroDetailUsecase implements Partial<HeroDetailUsecase> {
  fetchHero(): any {}
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
      imports: [HttpClientTestingModule],
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

  describe('goBack', () => {
    it('location back が呼ばれること', () => {
      spyOn(location, 'back');
      component.goBack();
      expect(location.back).toHaveBeenCalled();
    });
  });
});
