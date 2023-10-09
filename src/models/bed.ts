import { Schema, model, models } from 'mongoose';

const bedSchema = new Schema(
  {
    sort: {
      type: String,
      default: 'normal',
    },
  },
  { timestamps: true }
);

const Bed = models.Bed || model('Bed', bedSchema);

export default Bed;
