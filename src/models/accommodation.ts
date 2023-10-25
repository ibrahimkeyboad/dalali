import { Schema, model, models } from 'mongoose';
import User from './user';

interface Accommodation {
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

const accommodationSchema = new Schema(
  {
    type: {
      type: String, //single double self -s
      required: true,
      trim: true,
    },

    city: {
      type: String,
      required: true,
    },

    located: {
      type: String,
      required: true,
    },

    kitchen: [String],

    bedroom: [
      {
        sort: {
          type: String,
          default: 'normal',
          required: true,
        },

        description: {
          type: String,
        },

        bed: [
          {
            sort: {
              type: String,
              default: 'normal',
            },
          },
        ],
      },
    ],

    bathroom: [
      {
        sort: {
          type: String,
          default: 'public',
        },

        description: String,

        shower: {
          type: String,
          default: 'hot water',
        },
      },
    ],

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

    payFormDuration: {
      type: String,
      required: true,
    },
    // imageCover: {
    //   uri: {
    //     type: String,
    //     required: true,
    //   },
    //   public_id: {
    //     type: String,
    //     required: true,
    //   },
    // },
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
    // isAvailable: {
    //   type: Boolean,
    //   default: true,
    // },
    owner: {
      type: Schema.Types.ObjectId,
      ref: User,
    },
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
