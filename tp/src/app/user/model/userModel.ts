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
}
