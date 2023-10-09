import { Schema, models, model } from 'mongoose';

const verificationTokenSchema = new Schema({
  identifier: {
    type: String,
  },

  token: {
    type: String,
    required: true,
    unique: true,
  },
  expires: {
    type: Date,
    required: true,
  },
});

const VerificationToken =
  models.VerificationToken ||
  model('VerificationToken', verificationTokenSchema);

export default VerificationToken;
