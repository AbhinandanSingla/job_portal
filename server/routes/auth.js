import express from "express";

const router = express.Router();
import User from "../models/user.js";
import passport from "passport";
import jwt from "jsonwebtoken";

import {
    getToken,
    COOKIE_OPTIONS,
    getRefreshToken,
    verifyUser,
} from "./strategies/authenticate.js";
import {REFRESH_TOKEN_SECRET} from "./strategies/config.js";

router.post("/signup", (req, res, next) => {
    const {email, FirstName, LastName, Phonenum, Address, Work, dob} = req.body;
    User.register(
        new User({
            username: email,
            firstName: FirstName,
            lastName: LastName,
            phoneNumber: Phonenum,
            address: Address,
            workOutside: Work,
            DOB: dob,
        }),
        req.body.password,
        (err, user) => {
            if (err) {
                res.statusCode = 500;
                res.send(err);
            } else {
                const token = getToken({_id: user._id});
                const refreshToken = getRefreshToken({_id: user._id});
                user.refreshToken.push({refreshToken});
                user.save((err, user) => {
                    if (err) {
                        res.statusCode = 500;
                        res.send(err);
                    } else {
                        res.cookie("refreshToken", refreshToken);
                        res.send({success: true, token, id: user._id});
                    }
                });
            }
        }
    );
});

router.get("/me", verifyUser, (req, res, next) => {
    res.send(req.user);
});

router.post("/login", passport.authenticate("local"), (req, res, next) => {
    console.log(req.user._id)
    const token = getToken({_id: req.user._id});
    const refreshToken = getRefreshToken({_id: req.user._id});
    User.findById(req.user._id).then(
        (user) => {
            user.refreshToken.push({refreshToken});
            user.save((err, user) => {
                if (err) {
                    res.statusCode = 500;
                    res.send(err);
                } else {
                    res.cookie("refreshToken", refreshToken);
                    res.send({success: true, token, id: user._id});
                }
            });
        },
        (err) => next(err)
    );
});

router.post("/refreshToken", (req, res, next) => {
    const {cookies = {}} = req;
    console.log(cookies)
    const {refreshToken} = cookies;
    if (refreshToken) {
        try {
            const payload = jwt.verify(
                refreshToken,
                REFRESH_TOKEN_SECRET
            );
            const userId = payload._id;
            console.log(userId)
            User.findOne({_id: userId}).then(
                (user) => {
                    if (user) {
                        // Find the refresh token against the user record in database
                        const tokenIndex = user.refreshToken.findIndex(
                            (item) => item.refreshToken === refreshToken
                        );

                        if (tokenIndex === -1) {
                            res.statusCode = 401;
                            res.send("Unauthorized");
                        } else {
                            const token = getToken({_id: userId});
                            const newRefreshToken = getRefreshToken({_id: userId});
                            user.refreshToken[tokenIndex] = {refreshToken: newRefreshToken};
                            user.save((err, user) => {
                                if (err) {
                                    res.statusCode = 500;
                                    res.send(err);
                                } else {
                                    res.cookie("refreshToken", newRefreshToken);
                                    res.send({success: true, token});
                                }
                            });
                        }
                    } else {
                        res.statusCode = 401;
                        res.send("Unauthorized");
                    }
                },
                (err) => next(err)
            );
        } catch (err) {
            res.statusCode = 401;
            res.send("Unauthorized");
        }
    } else {
        res.statusCode = 401;
        res.send("Unauthorized");
    }
});

router.get("/logout", verifyUser, (req, res, next) => {
    const {cookies = {}} = req;
    const {refreshToken} = cookies;
    User.findById(req.user._id).then(
        (user) => {
            const tokenIndex = user.refreshToken.findIndex(
                (item) => item.refreshToken === refreshToken
            );

            if (tokenIndex !== -1) {
                user.refreshToken.id(user.refreshToken[tokenIndex]._id).remove();
            }

            user.save((err, user) => {
                if (err) {
                    res.statusCode = 500;
                    res.send(err);
                } else {
                    res.clearCookie("refreshToken");
                    res.send({success: true});
                }
            });
        },
        (err) => next(err)
    );
});
export default router;
