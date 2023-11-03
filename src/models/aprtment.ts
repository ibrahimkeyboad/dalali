import { Schema, model, models } from 'mongoose';
import User from './user';

const apartmentSchema = new Schema(
  {
    type: {
      type: String, //single double self -s
      required: true,
      trim: true,
    },

    price: {
      amount: {
        type: Number,
        return: true,
      },
      duration: {
        type: String,
      },
      perDuration: {
        type: String,
      },
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
    rooms: [
      {
        bedroom: {},
        bedromm: {},
      },
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

    category: {
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
