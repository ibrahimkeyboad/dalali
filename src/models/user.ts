import moongose from 'mongoose';

const { Schema, model, models } = moongose;

enum Role {
  admin = 'admin',
  user = 'user',
}

const userSchema = new Schema<User>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
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

    role: {
      type: String,
      required: true,
      default: Role.user,
    },
  },
  { timestamps: true }
);

const User = models.User || model('User', userSchema);

export default User;
