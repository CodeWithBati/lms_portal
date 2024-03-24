import Express from "express";
import { activateUser, LoginUser, LogOut, registrationUser } from "../controllers/user.controller";
const userRouter = Express.Router();

userRouter.post("/registration", registrationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", LoginUser);
userRouter.get("/logout", LogOut);

export default userRouter;
