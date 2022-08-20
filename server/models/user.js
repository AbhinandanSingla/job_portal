import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const Session = mongoose.Schema({
    refreshToken: {
        type: String,
        default: "",
    },
});
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    DOB: {
        type: Date,
    },
    educationalQualifications: {
        tenth: {
            type: Buffer,
            contentType: String,
            default: null,
        },
        twelveth: {
            type: Buffer,
            contentType: String,
            default: null,
        },
        graduation: {
            type: Buffer,
            contentType: String,
            default: null,
        },
        postGraduation: {
            type: Buffer,
            contentType: String,
            default: null,
        },
    },
    pastWorkExperience: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    zipCode: {
        type: Number,
    },
    workOutside: {
        type: Boolean,
    },
    phoneNumber: {
        type: String,
    },
    jobApplied: [],
    Notifications: [],
    bookmarks: [],
    username: {
        type: String,
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
