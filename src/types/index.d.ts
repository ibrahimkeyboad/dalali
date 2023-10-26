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
  located: string;
  type: string;
  price: number;
  beds: number;
  sofa: number;
  street: string;
  city: string;
  country: string;
  bathrooms: number;
  duration: string;
  purpose: string;
  isAvailable: boolean;
  area: number;
  offers: string[];

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
