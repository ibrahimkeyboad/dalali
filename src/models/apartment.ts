import { Schema, model, models } from 'mongoose';

interface Apartment {
  _id?: Schema.Types.ObjectId;
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

const apartmentSchema = new Schema<Apartment>(
  {
    type: {
      type: String, //single doudle self
      required: true,
      trim: true,
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
      uri: {
        type: String,
        required: true,
      },
      public_id: {
        type: String,
        required: true,
      },
    },
    images: [
      {
        uri: {
          type: String,
          required: true,
        },
        public_id: {
          type: String,
          required: true,
        },
      },
    ],
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

const Apartment = models.Apartment || model('Apartment', apartmentSchema);

export default Apartment;
