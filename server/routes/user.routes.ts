import Express from "express";
import { activateUser, getUserInfo, LoginUser, LogOut, registrationUser, socialAuth, UpdateAccessToken } from "../controllers/user.controller";
import { isAuthenticated } from "../middleware/auth";
const userRouter = Express.Router();

userRouter.post("/registration", registrationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", LoginUser);
userRouter.get("/logout", isAuthenticated, LogOut);
userRouter.get("/refresh", UpdateAccessToken);
userRouter.get("/me", isAuthenticated, getUserInfo);
userRouter.post("/socialauth", socialAuth)

export default userRouter;
