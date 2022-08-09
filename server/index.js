import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.js";
import adminRoutes from "./routes/admin.js";
import authRoutes from "./routes/auth.js";
import connectDB from "./database/config.js";
import passport from "passport";
import session from "express-session";
import { graphqlHTTP } from "express-graphql";
import schema from "./models/Schema.js";
import cors from "cors";
import User from "./models/user.js";
import cookieParser from "cookie-parser";
import "./routes/strategies/JwtStrategy.js";
import LocalStrategy from "passport-local";
const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(cookieParser("jhdshhds884hfhhs-ew6dhjd"));

app.use(
  session({
    secret: "verygoodsecret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  "/graphsql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use("/", userRoutes);
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
