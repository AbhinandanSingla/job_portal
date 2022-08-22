import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const Session = mongoose.Schema({
    refreshToken: {
        type: String,
        default: "",
    },
});

const purposal = mongoose.Schema({
    id: {
        type: String,
        default: "",
    },
});

const companySchema = mongoose.Schema({
    password: {
        type: String
    },
    companyProfilePicture: {
        type: String,
    },
    companyName: {
        type: String,
    },
    username: {
        type: String,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ],
    },
    phoneNumber: {
        type: Number,
    },
    companyType: {
        type: String,
    },
    GSTIN: {
        type: Number,
    },
    Jobs: [],
    JobsHistory: [],
    purposals: [purposal],
    refreshToken: {
        type: [Session]
    }, appliedDate: {
        type: String,
    },
});
``

const adminSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    companies: {
        type: [companySchema]
    },
    rejectedCompanies: {
        type: [companySchema]
    },
    refreshToken: {
        type: [Session]
    },
});

adminSchema.set("toJSON", {
    transform: function (doc, ret, options) {
        delete ret.refreshToken;
        return ret;
    },
});
const jobSchema = mongoose.Schema({
    companyID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Companies",
        pid: String,
        oFile: String,
    },
    jobProfile: {
        type: String
    },
    companyName: {
        type: String,
        require: true,
    },
    jobTitle: {
        type: String,
        require: true,
    },
    jobCategory: {
        type: String,
        require: true,
    },
    jobLocation: {
        type: String,
        require: true,
    },
    jobType: {
        type: String,
        require: true,
    },
    jobDescription: {
        type: String,
        require: true,
    },
    ApplicationDeadline: {
        type: Date,
        require: true,
    },
    Qualifications: [],

    Experience: {
        type: String,
    },
    SalaryRange: {
        type: String,
        require: true,
    },
    applications: [],
    numberApplicants: {
        type: Number,
        default: 999
    }, skills: [],
    additionalLinks: {
        type: String,
    }
});
adminSchema.plugin(passportLocalMongoose);
companySchema.plugin(passportLocalMongoose);
export const admin = mongoose.model("Admins", adminSchema);

export const company = mongoose.model("Companies", companySchema);
export const companyPurposals = mongoose.model('companyPurposals', companySchema);
export const job = mongoose.model("jobs", jobSchema);
