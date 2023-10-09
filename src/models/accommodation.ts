import { Schema, model, models } from 'mongoose';

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

const accommodationSchema = new Schema(
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

    bathrooms: {
      type: Number,
      required: true,
    },
    bedrooms: {
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

    purpose: {
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
    street: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Accommodation =
  models.Accommodation || model('Accommodation', accommodationSchema);

export default Accommodation;
