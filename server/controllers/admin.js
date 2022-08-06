import bcrypt from "bcrypt";
import {company, job} from "../models/admin.js";

async function hashMe(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

export const addCompany = (req, res) => {
    if (!req.body) {
        res.send("Bad Request")
    }
    hashMe(req.body.password).then(d => {
        req.body.password = d;
        const Company = new company(req.body)
        Company.save(Company).then(data => {
            res.send(data);
            console.log(data)
        }).catch(err => {
            console.log(err)
            console.log(req.statusCode)
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        })
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
