import moongose from 'mongoose';

const { Schema, model, models } = moongose;

const userSchema = new Schema({
  image: {
    type: String,
    required: true,
  },

  email: {
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

  iEmailVerified: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
},
{ timestamps: true }
);

const User = models.User || model('User', userSchema);

export default User;
