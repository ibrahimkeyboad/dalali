import { Schema, model, models } from 'mongoose';

interface Image {
  url: string;
  pulic: string;
}

interface Accommodation {
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
  imageCover: Image;
  images: Image[];
  description: string;
}

const accommodationSchema = new Schema<Accommodation>(
  {
    type: {
      type: String,
      required: true,
      trim: true,
    },

    area: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    beds: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },
    imageCover: {
      type: Image,
      required: true,
    },
    images: {
      type: [Image],
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    // owner: {},
    price: {
      type: Number,
      required: true,
    },
    purpose: {},
    street: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model('User', accommodationSchema);

export default User;
