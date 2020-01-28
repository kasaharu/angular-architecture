import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from '../../domain/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent implements OnInit {
  constructor() {}

  @Input()
  user: User;

  ngOnInit() {}
}
