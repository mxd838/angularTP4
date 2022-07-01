import { Component, OnInit } from '@angular/core';
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
    console.log(this.users);
  }

  getUsers = () => {
    this.users = this.service.data;
  };
}
