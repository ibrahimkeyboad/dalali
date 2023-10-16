import { Schema, model, models } from 'mongoose';
import Bed from './bed';
import House from './house';
import Apartment from './apartment';

const bedroomSchema = new Schema(
  {
    sort: {
      type: String,
      default: 'normal',
    },

    description: {
      type: String,
    },

    house: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: House,
    },
    // apartment: {
    //   type: Schema.Types.ObjectId,
    //   required: true,
    //   ref: Apartment,
    // },

    bed: [
      {
        type: Schema.Types.ObjectId,
        ref: Bed,
      },
    ],
  },
  { timestamps: true }
);

const Bedroom = models.Bedroom || model('Bedroom', bedroomSchema);

export default Bedroom;
