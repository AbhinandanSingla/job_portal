import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.js";
import adminRoutes from "./routes/admin.js";
import connectDB from "./database/config.js";
import passport from "passport";

const port = process.env.PORT || 8080
const app = express();

app.use(session({
    secret: "verygoodsecret",
    resave: false,
    saveUninitialized: true
}));

// Passport.js
app.use(passport.initialize());
app.use(passport.session());


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/", userRoutes);
app.use("/admin", adminRoutes);


connectDB
    .then(() => {
        app.listen(port, () => {
            console.log(`Server's running at PORT: ${port}`);
        });
    })
    .catch((e) => {
        console.log("ERROR💥: " + e.message);
    });
