import { Schema, model, models } from 'mongoose';
import User from './user';

const apartmentSchema = new Schema(
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

    offers: [String],
    rooms: [
      {
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
        bedroom: {},
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
        kitchen: {
          size: String,
          washing: String,
          fidge: String,
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
