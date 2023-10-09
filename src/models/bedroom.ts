import { Schema, model, models } from 'mongoose';
import Bed from './bed';

const bedroomSchema = new Schema(
  {
    sort: {
      type: String,
      default: 'normal',
    },

    bed: {
      type: Schema.Types.ObjectId,
      ref: Bed,
    },
  },
  { timestamps: true }
);

const Bedroom = models.Bedroom || model('Bedroom', bedroomSchema);

export default Bedroom;