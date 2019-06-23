import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../core/models';
import { PostStoreState } from '../store/root/post-store';

@Injectable({
  providedIn: 'root'
})
export class PostQuery {
  constructor(private store$: Store<{}>) { }

  postList$: Observable<Post[]> = this.store$.pipe(select(PostStoreState.selectTodoList));
}
