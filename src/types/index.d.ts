interface bodyData {
  name: string;
  email: string;
  password: string;
}

interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  street: string;
  city: string;
  country: string;
  role?: String;
  iEmailVerified?: boolean;
}

type Token = {
  identifier: string;
  token: string;
  expires: string;
};

interface Accommodation {
  _id?: Schema.Types.ObjectId;
  type: string;
  price: number;
  beds: number;
  location: Location;
  bathrooms: number;
  purpose: string;
  isAvailable: boolean;
  offers: string[];
  price: Price;
  kitchen: Kitchen;
  room: Room[];
  bath: Bath[];
  images: [
    {
      uri: string;
      public_id: string;
    }
  ];
  owner?: string;
  description: string;
  payFormDuration: string;
  category: string;
}

interface Bath {
  sort: string;
  description: string;
  shower: string;
  toilet: string;
}

interface Room {
  sort: string; // bed sitting
  description: string; // where you can sit and relax
}

interface Kitchen {
  size?: string;
  washing?: string;
  fidge?: string;
}

interface Location {
  located: string;
  street: string;

  city: string;
  country: string;
}

interface Price {
  amount: number;
  duration: string;
  perDuration: string;
}
