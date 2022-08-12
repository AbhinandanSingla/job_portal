import User from "../models/user.js";
import bcrypt from "bcrypt";

async function hashMe(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

export const addUser = (req, res) => {
    console.log(Object.keys(req));
    console.log(req.body)
    hashMe(req.body.password).then(d => {
        const user = new User({
            firstName: req.body.fname,
            lastName: req.body.lname,
            DOB: req.body.dob,
            address: req.body.address,
            city: req.body.city,
            country: req.body.country,
            zipCode: req.body.zipcode,
            workOutside: req.body.workoutside,
            phoneNumber: req.body.phone,
            password: d
        })
        user.save(user).then(data => {
            res.send(data);
            console.log(data)
        }).catch(err => {
            console.log(err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        })
    })
}