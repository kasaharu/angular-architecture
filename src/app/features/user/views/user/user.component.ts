import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserUsecase } from '../../applications/user.usecase';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  constructor(private usecase: UserUsecase) {}

  ngOnInit() {
    this.usecase.initialize();
  }
}
