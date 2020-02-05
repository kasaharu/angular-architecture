import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

export const useFirstValue = <T>(obs: Observable<T>): Promise<T> => {
  return obs.pipe(take(1)).toPromise();
};
