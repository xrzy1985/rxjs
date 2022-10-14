export interface Users {
  address: Address;
  company: Company;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}

interface Address {
  city: string;
  geo: LatitudeLongitude;
  street: string;
  suite: string;
  zipcode: string;
}

interface LatitudeLongitude {
  lat: string;
  lng: string;
}