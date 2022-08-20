import {company, job, admin, tempCompany} from "../models/admin.js";


export const addCompany = (req, res) => {
    if (!req.body) {
        res.send("Bad Request")
    }
    const company1 = new company(req.body);
    admin.findById(req.body.id).then((admin) => {
        admin.companies.push(company1);
        admin.save((err, admin) => {
            if (err) {
                res.statusCode = 500;
                res.send(err);
            } else {
                res.send({success: true, id: admin._id});
            }
        }).catch(e => {
            console.log(e)
            res.send(e);

        })
    })
}

export const acceptCompany = (req, res) => {
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
            const company1 = new company(a);
            company1.save(company1).then(data => {
                admin.companies.id(admin.companies[companyIndex]._id).remove();
                admin.save((err, user) => {
                    if (err) {
                        res.statusCode = 500;
                        res.send(err);
                    } else {
                        res.send({success: true});
                    }
                });
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
        comp.purposals.push(req.body.userID);
    })
}