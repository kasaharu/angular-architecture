import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../core/models';
import { PostQuery } from '../../queries/post.query';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  constructor(private query: PostQuery) {}

  postList$: Observable<Post[]> = this.query.postList$;

  ngOnInit() {}
}
