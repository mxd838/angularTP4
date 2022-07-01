import { Injectable } from '@angular/core';
import data from '../data/usersData';
import { UserModel } from '../model/userModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public data: UserModel[] = data;
  constructor() {}
}
