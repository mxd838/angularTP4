import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  private users: any;

  constructor(private service: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.displayUser();
  }

  displayUser = () => {
    this.users = this.service.data.filter(
      (data: any) => data.id == this.route.snapshot.params['id']
    );
    console.log(this.service.data);
    console.log(this.users);
  };
}
