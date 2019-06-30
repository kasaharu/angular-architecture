import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../core/models';
import { PostStoreSelector } from '../store/root/post-store';

@Injectable({
  providedIn: 'root',
})
export class PostQuery {
  constructor(private store$: Store<{}>) {}

  postList$: Observable<Post[] | null> = this.store$.pipe(select(PostStoreSelector.selectPostList));
}
