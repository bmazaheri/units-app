export interface UnitsStateResponseModel {
  data: Unit[];
  totalElements: number;
}

export interface UnitsState {
  units: Unit[];
  totalElements: number;
}

export interface Unit {
  address: Address;
  availableFromDate: Date;
  availableFromNowOn: Date;
  building: any;
  countryCode: string;
  details: Details;
  direction: string;
  documents: any;
  energyCertificate: any;
  gasCertificate: any;
  id: string;
  isProtectedBuilding: boolean;
  lastPublishedDate: Date;
  localization: any;
  neighborhood: string;
  teaserImageUrl: string;
  title: string;
  type: string;
}

export interface Details {
  floor: number;
  numberOfRooms: number;
  rent: Rent;
  size: number;
}

export interface Rent {
  baseRent: number;
  deposit: number;
  operationalCosts: number;
  totalRent: number;
}

export interface Address {
  borough: string;
  city: string;
  countryCode: string;
  houseNumber: string;
  latitude: number;
  longitude: number;
  neighborhood: string;
  postalCode: string;
  state: string;
  streetName: string;
  type: string;
}
