import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Hero } from '../../../../domain/hero';
import { HeroInfoComponent } from './hero-info.component';

@Component({
  template: `<app-hero-info [hero]="hero"></app-hero-info>`,
})
class TestHostComponent {
  hero: Hero = { id: 1, name: 'Test Hero' };
}

describe('HeroInfoComponent', () => {
  let component: HeroInfoComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let testHostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroInfoComponent, TestHostComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    component = fixture.debugElement.query(By.directive(HeroInfoComponent)).componentInstance;

    fixture.detectChanges();
  });

  describe('ngOnInit', () => {
    it('component が作成されたこと', () => {
      expect(component).toBeTruthy();
    });

    it('h2 要素に TEST HERO Details が表示されること', () => {
      const h2Element: HTMLElement = fixture.debugElement.query(By.css('h2')).nativeElement;

      expect(h2Element.textContent).toBe('TEST HERO Details');
    });
  });
});
