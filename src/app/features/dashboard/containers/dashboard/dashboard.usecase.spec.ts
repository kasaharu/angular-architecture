import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DashboardStore } from './dashboard.store';
import { DashboardUsecase } from './dashboard.usecase';

describe('DashboardUsecase', () => {
  let usecase: DashboardUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DashboardUsecase, DashboardStore],
    });
    usecase = TestBed.inject(DashboardUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});
