import moongose from 'mongoose';

const { Schema, model, models } = moongose;

enum Role {
  admin = 'admin',
  user = 'user',
}

const userSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
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
});

const User = models.User || model('User', userSchema);

export default User;
