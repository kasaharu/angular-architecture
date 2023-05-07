import { TestBed } from '@angular/core/testing';
import { DashboardStore } from './dashboard.store';

describe('DashboardStore', () => {
  let store: DashboardStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardStore],
    });
    store = TestBed.inject(DashboardStore);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });
});
