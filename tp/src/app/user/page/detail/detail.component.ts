import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../../model/userModel';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  public users!: UserModel;

  constructor(private service: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.displayUser();
  }

  displayUser = () => {
    let resu: any = [];
    this.service.data.subscribe((data) => (resu = data));

    resu = resu.filter(
      (data: any) => data.id == this.route.snapshot.params['id']
    );

    this.users = resu[0];
    console.log(this.users);
  };
}
