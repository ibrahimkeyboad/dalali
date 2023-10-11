import { Schema, model, models } from 'mongoose';

const bathroomSchema = new Schema(
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
  { timestamps: true }
);

const Bathroom = models.Bathroom || model('Bathroom', bathroomSchema);

export default Bathroom;
