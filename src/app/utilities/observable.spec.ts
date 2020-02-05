import { of } from 'rxjs';
import { useFirstValue } from './observable';

describe('useFirstValue', () => {
  it('Observable<number> から number を取り出す', async () => {
    const targetValue = 1;
    const testValue$ = of(targetValue);
    const result = await useFirstValue(testValue$);

    expect(result).toBe(targetValue);
  });

  it('Observable<string> から string を取り出す ', async () => {
    const targetValue = 'test';
    const testValue$ = of(targetValue);
    const result = await useFirstValue(testValue$);

    expect(result).toBe(targetValue);
  });
});
