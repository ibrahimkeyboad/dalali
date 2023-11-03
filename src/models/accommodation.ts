import { Schema, model, models } from 'mongoose';
import User from './user';

const accommodationSchema = new Schema<Accommodation>(
  {
    type: {
      type: String, //single double self -s
      required: true,
      trim: true,
    },

    location: {
      located: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },

      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },

    kitchen: {
      size: String,
      washing: String,
      fidge: String,
    },

    offers: [String],
    room: [
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
            },
          },
        ],
      },
    ],

    bath: [
      {
        sort: {
          type: String,
          required: true,
        },

        description: String,
        toilet: {
          type: String,
          required: true,
        },

        shower: {
          type: String,
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
  },
  {
    timestamps: true,
  }
);

const Accommodation =
  models.Accommodation || model('Accommodation', accommodationSchema);

export default Accommodation;
