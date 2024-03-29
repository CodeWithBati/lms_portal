import Express from "express";
const courseRouter = Express.Router();
import { authoriseRole, isAuthenticated } from "../middleware/auth";
import { uploadCourse } from "../controllers/course.controller";

courseRouter.post("/create-course", isAuthenticated, authoriseRole("admin"), uploadCourse);


export default courseRouter;