import { Schema, model, models } from 'mongoose';

const FrameSchema = new Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    size: {
      type: Number,
      required: true,
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

    sort: {
      type: String,
      required: true,
      default: 'Shop',
    },

    desciption: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Frame = models.Frame || model('Frame', FrameSchema);

export default Frame;
