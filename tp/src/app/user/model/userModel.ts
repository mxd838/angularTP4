import { AddressModel } from './addressModel';
import { CompanyModel } from './companyModel';

export class UserModel {
  id!: number;
  username!: string;
  email!: string;
  address!: AddressModel;
  phone!: string;
  website!: string;
  company!: CompanyModel;

  constructor(
    id: number,
    username: string,
    email: string,
    address: AddressModel,
    phone: string,
    company: CompanyModel
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.company = company;
  }
}
