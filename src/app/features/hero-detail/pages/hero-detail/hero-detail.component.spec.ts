import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HeroApi } from '../../../../infrastructures/api/hero.api';
import { ActivatedRouteStub } from '../../../../testing/activated-route-stub';
import { HeroDetailPageComponent } from './hero-detail.component';

class MockHeroService {}

describe('HeroDetailPageComponent', () => {
  let component: HeroDetailPageComponent;
  let fixture: ComponentFixture<HeroDetailPageComponent>;
  let activatedRoute: ActivatedRouteStub;

  beforeEach(async () => {
    activatedRoute = new ActivatedRouteStub({ id: 1 });

    await TestBed.configureTestingModule({
      imports: [HeroDetailPageComponent],
      providers: [
        { provide: HeroApi, useClass: MockHeroService },
        { provide: ActivatedRoute, useValue: activatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
