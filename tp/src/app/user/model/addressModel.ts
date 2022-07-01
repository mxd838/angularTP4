import { GeoModel } from './geoModel';

export class AddressModel {
  street!: string;
  suite!: string;
  city!: string;
  zipcode!: string;
  geo!: GeoModel;

  constructor(
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: GeoModel
  ) {
    this.street = street;
    this.suite = suite;
    this.city = city;
    this.zipcode = zipcode;
    this.geo = geo;
  }
}
