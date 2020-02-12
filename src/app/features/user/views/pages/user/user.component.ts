import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserQuery } from '../../../applications/user.query';
import { UserUsecase } from '../../../applications/user.usecase';
import { User } from '../../../domain/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private query: UserQuery, private usecase: UserUsecase) {}
  user$: Observable<User | null> = this.query.user$;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== null) {
        this.usecase.initializeDetail(+id);
      }
    });
  }

  async updateUser(user: User) {
    await this.usecase.updateUser(user);
    this.router.navigateByUrl('/users');
  }
}
