import Express from "express";
import { activateUser, LoginUser, LogOut, registrationUser } from "../controllers/user.controller";
import { isAuthenticated } from "../middleware/auth";
const userRouter = Express.Router();

userRouter.post("/registration", registrationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", LoginUser);
userRouter.get("/logout", isAuthenticated, LogOut);

export default userRouter;
