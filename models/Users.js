import mongoose from "mongoose";
import validator from "validator";

// Helper function to generate a 5-digit userId
function generateUserId() {
  return Math.floor(10000 + Math.random() * 90000).toString();
}

const UserSchema = new mongoose.Schema({
  userId: { type: String, unique: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: `Email is incorrect`,
    },
  },
  password: { type: String, minlength: 6, required: true },
  confirmPassword: {
    type: String,
    select: false,
    default: undefined,
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: `Passwords don't match`,
    },
  },
});

// Pre-save middleware to generate a 5-digit userId if not already set
UserSchema.pre("save", async function (next) {
  if (!this.userId) {
    let newUserId;
    let userExists = true;

    // Ensure the generated userId is unique
    while (userExists) {
      newUserId = generateUserId();
      userExists = await mongoose.models.users.findOne({ userId: newUserId });
    }

    this.userId = newUserId;
  }
  next();
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
