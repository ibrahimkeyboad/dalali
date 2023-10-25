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
  tags: string[];

  kitchen: [string];
  bedroom: [
    {
      sort: string;
      description: string;
    }
  ];
  bathroom: [
    {
      sort: string;
      description: string;
      shower: string;
    }
  ];
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
