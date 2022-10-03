import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { ActivatedRouteStub } from './testing/activated-route-stub';

describe('AppComponent', () => {
  let activatedRoute: ActivatedRouteStub;

  beforeEach(async () => {
    activatedRoute = new ActivatedRouteStub({ id: 1 });

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRoute }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Tour of Heroes'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Tour of Heroes');
  });
});
