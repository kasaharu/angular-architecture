import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../../../../testing/activated-route-stub';
import { HeroDetailUsecase } from '../../containers/hero-detail/hero-detail.usecase';
import { HeroDetailPageComponent } from './hero-detail.component';

class MockHeroDetailUsecase implements Partial<HeroDetailUsecase> {
  setHeroId(): void {}
}

describe('HeroDetailPageComponent', () => {
  let component: HeroDetailPageComponent;
  let fixture: ComponentFixture<HeroDetailPageComponent>;
  let activatedRoute: ActivatedRouteStub;
  let usecase: HeroDetailUsecase;

  beforeEach(async () => {
    activatedRoute = new ActivatedRouteStub({});

    await TestBed.configureTestingModule({
      declarations: [HeroDetailPageComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRoute }],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .overrideComponent(HeroDetailPageComponent, { add: { providers: [{ provide: HeroDetailUsecase, useClass: MockHeroDetailUsecase }] } })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailPageComponent);
    component = fixture.componentInstance;
    usecase = fixture.debugElement.injector.get(HeroDetailUsecase);
  });

  describe('ngOnInit', () => {
    it('component が作成されたこと', () => {
      expect(component).toBeTruthy();
    });

    it('component が作成されたときに URL に id がある場合 usecase の setHeroId が呼ばれること', () => {
      const expectedHeroId = 1;
      activatedRoute.setParamMap({ id: expectedHeroId });
      spyOn(usecase, 'setHeroId');
      fixture.detectChanges();

      expect(usecase.setHeroId).toHaveBeenCalledWith(expectedHeroId);
    });

    it('component が作成されたときに URL に id がない場合 usecase の setHeroId が呼ばれないこと', () => {
      spyOn(usecase, 'setHeroId');
      fixture.detectChanges();

      expect(usecase.setHeroId).not.toHaveBeenCalled();
    });
  });
});
