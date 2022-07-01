import { Injectable } from '@angular/core';
import data from '../data/usersData';
import { UserModel } from '../model/userModel';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { GeoModel } from '../model/geoModel';
import { AddressModel } from '../model/addressModel';
import { CompanyModel } from '../model/companyModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private geo = new GeoModel('', '');
  private adresse = new AddressModel('', '', '', '', this.geo);
  private company = new CompanyModel('', '', '');
  private user = new UserModel(0, '', '', this.adresse, '', this.company);

  public data = new BehaviorSubject([this.user]);

  constructor(private http: HttpClient) {}

  getUsers = (): void => {
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/users')
      .subscribe((dataB) => this.data.next(dataB));
  };
}
