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
  _id: Schema.Types.ObjectId;
  type: string;
  price: number;
  bedrooms: number;
  beds: number;
  sofa: number;
  street: string;
  city: string;
  bathrooms: number;
  duration: string;
  purpose: string;
  isAvailable: boolean;
  area: number;
  tags: string[];
  imageCover: {
    uri: string;
    public_id: string;
  };
  images: [
    {
      uri: string;
      public_id: string;
    }
  ];
  description: string;
}
