import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from "./routes/user.js";
import adminRoutes from "./routes/admin.js";

const app = express();

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://Vishal:HelloVS123@cluster0.m8pgw.mongodb.net/Roz?retryWrites=true&w=majority";
const port = process.env.PORT || 8080;

mongoose
  .connect(CONNECTION_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server's running at PORT: ${port}`);
    });
  })
  .catch((e) => {
    console.log("ERROR💥: " + e.message);
  });
