import passport from "passport";
import jwt from "jsonwebtoken";
import {JWT_SECRET, REFRESH_TOKEN_SECRET} from "./config.js";

const dev = process.env.NODE_ENV !== "production";
export const COOKIE_OPTIONS = {
    httpOnly: false,
    secure: !dev,
    signed: true,
    maxAge: eval("60 * 60 * 24 * 30") * 1000,
    sameSite: "none",
};

export const getToken = (user) => {
    return jwt.sign(user, JWT_SECRET, {
        expiresIn: eval("60 * 15"),
    });
};

export const getRefreshToken = (user) => {
    return jwt.sign(user, REFRESH_TOKEN_SECRET, {
        expiresIn: eval("60 * 60 * 24 * 30"),
    });
};
export const verifyUser = passport.authenticate("jwt", {session: false});
