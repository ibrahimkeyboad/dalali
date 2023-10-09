import { Schema, model, models } from 'mongoose';

interface Apartment {
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

const apartmentSchema = new Schema<Apartment>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: false,
    },

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
