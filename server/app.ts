import express, { NextFunction, Request, Response } from "express";
export const app = express();
require("dotenv").config();
import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error";
import userRouter from "./routes/user.routes";
import courseRouter from "./routes/course.routes";

//body Parser
app.use(express.json({ limit: "50mb" }));

// cookie Parser
app.use(cookieParser());

// cors = cross origin resource sharing
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

// user routes
app.use("/api/v1", userRouter);

//course routes
app.use("/api/v1", courseRouter);

// testing api
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "Api is working",
  });
});

// unknown route

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} is not found`) as any;
  err.status = 404;
  next(err);
});

app.use(ErrorMiddleware);
