import Express from "express";
import {
  activateUser,
  getUserInfo,
  LoginUser,
  LogOut,
  registrationUser,
  socialAuth,
  UpdateAccessToken,
  updateProfilePicture,
  updateUserPassword,
  userInfoUpdate,
} from "../controllers/user.controller";
import { isAuthenticated } from "../middleware/auth";
const userRouter = Express.Router();

userRouter.post("/registration", registrationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", LoginUser);
userRouter.get("/logout", isAuthenticated, LogOut);
userRouter.get("/refresh", UpdateAccessToken);
userRouter.get("/me", isAuthenticated, getUserInfo);
userRouter.post("/socialauth", socialAuth);
userRouter.put("/user-info-update", isAuthenticated, userInfoUpdate);
userRouter.put("/user-password", isAuthenticated, updateUserPassword);
userRouter.put("/user-update-avatar", isAuthenticated, updateProfilePicture);

export default userRouter;
