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
