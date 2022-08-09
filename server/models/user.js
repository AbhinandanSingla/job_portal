import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const Session = mongoose.Schema({
  refreshToken: {
    type: String,
    default: "",
  },
});

const userSchema = mongoose.Schema({
  // firstName: {
  //   type: String,
  //   required: true,
  // },
  // lastName: {
  //   type: String,
  //   required: true,
  // },
  // DOB: {
  //   type: Date,
  //   required: true,
  // },
  // educationalQualifications: {
  //   tenth: {
  //     type: Buffer,
  //     contentType: String,
  //     default: null,
  //   },
  //   twelveth: {
  //     type: Buffer,
  //     contentType: String,
  //     default: null,
  //   },
  //   graduation: {
  //     type: Buffer,
  //     contentType: String,
  //     default: null,
  //   },
  //   postGraduation: {
  //     type: Buffer,
  //     contentType: String,
  //     default: null,
  //   },
  // },
  // pastWorkExperience: {
  //   type: String,
  // },
  // address: {
  //   type: String,
  //   required: true,
  // },
  // city: {
  //   type: String,
  //   required: true,
  // },
  // country: {
  //   type: String,
  //   required: true,
  // },
  // zipCode: {
  //   type: Number,
  //   required: true,
  // },
  // workOutside: {
  //   type: Boolean,
  //   required: true,
  // },
  // phoneNumber: {
  //   type: Number,
  //   required: true,
  // },
  // password: {
  //   type: String,
  //   required: true,
  // },
  // jobApplied: [],
  // Notifications: [],
  // bookmarks: [],
  username: {
    type: String,
    require: true,
  },
  refreshToken: {
    type: [Session],
  },
});

userSchema.set("toJSON", {
  transform: function (doc, ret, options) {
    delete ret.refreshToken;
    return ret;
  },
});

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("Users", userSchema);
export default User;
