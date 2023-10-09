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

    located: {
      type: String,
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
