import { Schema, model, models } from 'mongoose';
import User from './user';
import Bedroom from './bedroom';

const houseSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: false,
    },

    type: {
      type: String, //single double self -s
      required: true,
      trim: true,
    },

    bedroom: [
      {
        type: Schema.Types.ObjectId,
        ref: Bedroom,
      },
    ],
    bathroom: [
      {
        type: Schema.Types.ObjectId,
        ref: Bedroom,
      },
    ],

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

    payFormDuration: {},
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
    // images: [
    //   {
    //     uri: {
    //       type: String,
    //       required: true,
    //     },
    //     public_id: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],
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

const House = models.House || model('House', houseSchema);

export default House;
