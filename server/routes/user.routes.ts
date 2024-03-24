import Express from "express";
import { activateUser, registrationUser } from "../controllers/user.controller";
const userRouter = Express.Router();

userRouter.post("/registration", registrationUser);
userRouter.post("/activate-user", activateUser);

export default userRouter;
