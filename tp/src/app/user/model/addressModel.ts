import { GeoModel } from './geoModel';

export class AddressModel {
  street!: string;
  suite!: string;
  city!: string;
  zipcode!: string;
  geo!: GeoModel;
}
