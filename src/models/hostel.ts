import { Schema, model, models } from 'mongoose';

const accommodationSchema = new Schema(
  {
    type: {
      type: String,
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

    size: {
      type: Number,
      required: true,
    },

    purpose: {
      type: String,
      required: true,
    },

    located: {
      type: String,
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
