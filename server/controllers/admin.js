import {company, job, admin, companyPurposals} from "../models/admin.js";
import bcrypt from "bcrypt";
import User from "../models/user.js";


export const addCompany = async (req, res) => {
    if (!req.body) {
        res.send("Bad Request")
    }
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    const company1 = new companyPurposals(req.body);
    company1.save((err, val) => {
        if (err) {
            res.statusCode = 500;
            res.send({status: false});
            console.log(err)
        } else {
            res.send({success: true});
        }
    })
}

export const acceptCompany = (req, res) => {
    companyPurposals.findById(req.body.id).then(val => {
        console.log(val)
        const company1 = new company(val.toObject());
        console.log(company1)
        company1.save(company1).then(data => {
            companyPurposals.findByIdAndDelete(req.body.id).then(val => {
                res.send({status: true})
            }).catch(e => {
                res.send({status: false})
            })
        }).catch(e => {
            console.log(e)
            res.statusCode = 500;
            res.send({status: false})
        })
    })
}
export const rejectCompany = (req, res) => {
    admin.findById(req.body.id).then((admin) => {
        const companyIndex = admin.companies.findIndex(
            (item) => item._id == req.body.companyID);
        console.log(companyIndex)
        if (companyIndex === -1) {
            res.statusCode = 401;
            res.send("Unauthorized");
        } else {
            let comp = admin.companies[companyIndex];
            let a = comp.toObject();
            admin.rejectedCompanies.push(a);
            admin.companies.id(admin.companies[companyIndex]._id).remove();
            admin.save((err, user) => {
                if (err) {
                    res.statusCode = 500;
                    res.send(err);
                } else {
                    res.send({status: true});
                }
            }).catch(e => {
                res.statusCode = 500;
                res.send(e);
            })

        }


    })

}
export const addJob = (req, res) => {
    if (!req.body) {
        res.send("Bad Request")
    }
    const Job = new job(req.body)
    Job.save(Job).then(data => {
        res.send(data);
        console.log(data)
    }).catch(err => {
        console.log(err)
        console.log(req.statusCode)
        res.status(500).send({
            message: err.message || "Some error occurred while creating a create operation"
        });
    })
}

export const getJobs = (id) => {
    if (id !== "") {
        return job.findOne({_id: id});
    }
    return job.find();
}

export const applyJob = (req, res) => {
    company.findById(req.body.companyID).then(comp => {
        comp.purposals.push({
            id: req.body.userId,
        });
        comp.save((err, company) => {
            User.findById(req.body.userId).then(val => {
                val.jobApplied.push(req.body.jobId)
                val.save((err, value) => {
                    if (err) {
                        res.statusCode = 500;
                        res.send(err);
                    } else {
                        res.send({success: true});
                    }
                })
            })
        })

    })

}


export const getCompanyJobs = async (id) => {
    console.log(id)
    return job.find({companyID: id});
}
export const unregisteredCompanies = async () => {
    return companyPurposals.find();
}
