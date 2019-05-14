import { TestBed } from '@angular/core/testing';

import { DetailUsecase } from './detail.usecase';

describe('DetailUsecase', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const usecase: DetailUsecase = TestBed.get(DetailUsecase);
    expect(usecase).toBeTruthy();
  });
});
