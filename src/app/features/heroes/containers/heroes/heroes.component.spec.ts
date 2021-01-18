import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';

let component: HeroesComponent;
let fixture: ComponentFixture<HeroesComponent>;

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [HeroesComponent],
    schemas: [NO_ERRORS_SCHEMA],
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
