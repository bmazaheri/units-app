export interface Unit {
  address: Address;
  availableFromDate: Date;
  availableFromNowOn: Date;
  building: any;
  countryCode: string;
  details: any;
  direction: string;
  documents: any;
  energyCertificate: any;
  gasCertificate: any;
  id: string;
  isProtectedBuilding: boolean;
  lastPublishedDate: "2018-07-02T09:31:01.924Z"
  localization: any;
  neighborhood: string;
  teaserImageUrl: string;
  title: string;
  type: string;
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