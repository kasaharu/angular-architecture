import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../core/models';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  constructor() {}
  @Input()
  postList: Post[];

  ngOnInit() {}
}
