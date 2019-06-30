import { selectTodoList } from './selectors';
import { State } from './state';

describe('TodoStoreSelector', () => {
  it('exec selectTodoList', () => {
    const todoList = [{ userId: 1, id: 1, title: '', completed: false }];
    const state: State = { todoList };
    expect(selectTodoList.projector(state)).toEqual(todoList);
  });
});
