import Express from "express";
import { registrationUser } from "../controllers/user.controller";
const userRouter = Express.Router();

userRouter.post("/registration", registrationUser);

export default userRouter;
