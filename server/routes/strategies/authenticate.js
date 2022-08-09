import passport from "passport";
import jwt from "jsonwebtoken";
const dev = process.env.NODE_ENV !== "production";
export const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: !dev,
  signed: true,
  maxAge: eval(60 * 60 * 24 * 30) * 1000,
  sameSite: "none",
};

export const getToken = (user) => {
  return jwt.sign(user, "jdhdhd-kjfjdhrhrerj-uurhr-jjge", {
    expiresIn: eval(60 * 15),
  });
};

export const getRefreshToken = (user) => {
  const refreshToken = jwt.sign(user, "fgkjddshfdjh773bdjsj84-jdjd774", {
    expiresIn: eval(60 * 60 * 24 * 30),
  });
  return refreshToken;
};
export const verifyUser = passport.authenticate("jwt", { session: false });
