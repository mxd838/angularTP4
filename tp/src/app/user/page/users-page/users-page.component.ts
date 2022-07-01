import { Component, OnInit } from '@angular/core';
import { AddressModel } from '../../model/addressModel';
import { CompanyModel } from '../../model/companyModel';
import { GeoModel } from '../../model/geoModel';
import { UserModel } from '../../model/userModel';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css'],
})
export class UsersPageComponent implements OnInit {
  public users: any;
  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers = (): void => {
    this.service.getUsers();
    this.service.data.subscribe((datab) => (this.users = datab));
  };
}
