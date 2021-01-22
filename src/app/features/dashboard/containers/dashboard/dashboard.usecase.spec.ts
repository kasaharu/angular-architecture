import { TestBed } from '@angular/core/testing';

import { DashboardUsecase } from './dashboard.usecase';

describe('DashboardUsecase', () => {
  let usecase: DashboardUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    usecase = TestBed.inject(DashboardUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});
