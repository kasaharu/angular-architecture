import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../domain/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent implements OnChanges {
  constructor() {}

  @Input()
  user: User;

  editableUserInfo = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
  });

  ngOnChanges() {
    const { name, username, email } = this.user;
    this.editableUserInfo.setValue({ name, username, email });
  }
}
