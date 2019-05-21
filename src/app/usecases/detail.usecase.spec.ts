import { TestBed } from '@angular/core/testing';

import { DetailUsecase } from './detail.usecase';
import { provideMockStore } from '@ngrx/store/testing';

describe('DetailUsecase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: {
            user: {
              selectedUser: null,
            },
          },
        }),
      ],
    });
  });

  it('should be created', () => {
    const usecase: DetailUsecase = TestBed.get(DetailUsecase);
    expect(usecase).toBeTruthy();
  });
});
