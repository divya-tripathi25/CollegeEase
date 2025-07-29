import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import createError from "http-errors";
import { startApp } from "./db/connection.js";
import AdminAuthRoute from "./routes/admin-auth.route.js";
import StudentAuthRoute from "./routes/student-auth.route.js";

const app = express();
startApp(app);

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("home");
});

app.use("/api/v1/auth/admin", AdminAuthRoute);
app.use("/api/v1/auth/student", StudentAuthRoute);

app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});
