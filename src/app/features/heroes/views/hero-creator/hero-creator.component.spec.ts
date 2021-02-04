import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeroCreatorComponent } from './hero-creator.component';

@Component({
  template: `<app-hero-creator (requestInputHeroName)="testHandler()"></app-hero-creator>`,
})
class TestHostComponent {
  testHandler(): void {}
}

describe('HeroCreatorComponent', () => {
  let component: HeroCreatorComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroCreatorComponent, TestHostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    component = fixture.debugElement.query(By.directive(HeroCreatorComponent)).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSubmit()', () => {
    it('button が click されたときに host component の testHandler が呼ばれること', () => {
      spyOn(hostComponent, 'testHandler');
      const buttonElem: HTMLElement = fixture.debugElement.query(By.css('button')).nativeElement;
      buttonElem.click();

      expect(hostComponent.testHandler).toHaveBeenCalled();
    });
  });
});
