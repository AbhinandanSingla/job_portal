import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
const companySchema = mongoose.Schema({
    companyProfilePicture: {
        type: String
    },
    companyName: {
        type: String,
        required: true
    }, companyEmail: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }, phoneNumber: {
        type: Number,
        required: true
    }, companyType: {
        type: String,
        required: true
    }, GSTIN: {
        type: Number,
        require: true
    }, Jobs: [],
    JobsHistory: [],
    password: {type: String, require: true}
})
const jobSchema = mongoose.Schema({
    companyID: {
        type:
        mongoose.Schema.Types.ObjectId, ref: 'Companies',
        pid: String,
        oFile: String
    },
    companyName: {
        type: String,
        require: true
    },
    jobTitle: {
        type: String,
        require: true
    }, jobCategory: {
        type: String,
        require: true
    }, jobLocation: {
        type: String,
        require: true
    }, jobType: {
        type: String,
        require: true
    },
    jobDescription: {
        type: String,
        require: true
    },
    ApplicationDeadline: {
        type: Date,
        require: true
    },
    Qualifications: []
    , Experience: {
        type: String,
    },
    SalaryRange: {
        type: String,
        require: true
    },
    applications: []
})
const admin = mongoose.model("Admins", adminSchema);
export const company = mongoose.model('Companies', companySchema);
export const job = mongoose.model("jobs", jobSchema);
export default admin;
