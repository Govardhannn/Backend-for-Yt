import mongoose, { Schema } from "mongoose";
import jwt, { sign } from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      lowercase: true,
      trim: true,
      unique: true,
      index: true, // this is for the seacing for DB - Searching Filed optmise
    },
    email: {
      type: String,
      require: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    fullname: {
      type: String,
      require: true,
      trim: true,
      index: true, // this is for the seacing for DB - Searching Filed optmise
    },

    avatar: {
      type: String, // cloudnary url
      require: true,
    },
    coverImage: {
      type: String, // cloudnary url
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      require: [true, "Password is Require"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true },
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hash(this.password, 10);
  next();
});

userSchema.method.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.method.generateAccessToken = function () {
  jwt.sign({
    _id: this._id,
    email: this.email,
    username: this.username,
    fullname: this.fullname,
  },
  process.env.ACCES_TOKEN_SECRET,
  {expiresIn: ACCES_TOKEN_EXPIRY}
);
};
userSchema.method.generateRefToken = function() {
      jwt.sign({
    _id: this._id,
    email: this.email,
    username: this.username,
    fullname: this.fullname,
  },
  process.env.ACCES_TOKEN_SECRET,
  {expiresIn: ACCES_TOKEN_EXPIRY}
);

};

export default User = new mongoose.model("User", userSchema);
