import express from "express";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.js";
import authRoutes from "./routes/auth.js";
import connectDB from "./database/config.js";
import passport from "passport";
import session from "express-session";
import {graphqlHTTP} from "express-graphql";
import schema from "./models/Schema.js";
import User from "./models/user.js";
import {admin, company} from './models/admin.js'
import cookieParser from "cookie-parser";
import "./routes/strategies/JwtStrategy.js";
import LocalStrategy from "passport-local";
import {COOKIE_SECRET} from "./routes/strategies/config.js";
import cors from "cors";
import dotenv from 'dotenv';
const port = process.env.PORT || 8080;
const app = express();
dotenv.config()

app.use(cookieParser(COOKIE_SECRET));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Request-Method, Access-Control-Request-Headers",);
    next();
});
app.use(
    session({
        secret: "verygoodsecret",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
passport.use('admin', new LocalStrategy(admin.authenticate()));
passport.use('user', new LocalStrategy(User.authenticate()));
passport.use('company', new LocalStrategy(company.authenticate()));

passport.serializeUser(User.serializeUser());
passport.serializeUser(admin.serializeUser());
passport.serializeUser(company.serializeUser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(
    "/graphsql",cors(),
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

app.use("/", adminRoutes);
app.use("/", authRoutes);

connectDB
    .then(() => {
        app.listen(port, () => {
            console.log(`Server's running at PORT: ${port}`);
        });
    })
    .catch((e) => {
        console.log("ERROR💥: " + e.message);
    });
