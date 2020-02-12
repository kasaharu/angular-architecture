import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
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
  @Output()
  updateUser = new EventEmitter<User>();

  addressGeoForm = new FormGroup({
    lat: new FormControl(''),
    lng: new FormControl(''),
  });

  addressForm = new FormGroup({
    street: new FormControl(''),
    suite: new FormControl(''),
    city: new FormControl(''),
    zipcode: new FormControl(''),
    geo: this.addressGeoForm,
  });

  companyForm = new FormGroup({
    name: new FormControl(''),
    catchPhrase: new FormControl(''),
    bs: new FormControl(''),
  });

  userInfoForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    website: new FormControl(''),
    address: this.addressForm,
    company: this.companyForm,
  });

  ngOnChanges() {
    const { id, name, username, email, phone, website } = this.user;
    this.userInfoForm.patchValue({ id, name, username, email, phone, website });
    const { street, suite, city, zipcode, geo } = this.user.address;
    this.addressGeoForm.patchValue({ lat: geo.lat, lng: geo.lng });
    this.addressForm.patchValue({ street, suite, city, zipcode, geo: this.addressGeoForm.value });
    const { company } = this.user;
    this.companyForm.patchValue({ name: company.name, catchPhrase: company.catchPhrase, bs: company.bs });
  }

  clickButton() {
    this.updateUser.emit(this.userInfoForm.value);
  }
}
