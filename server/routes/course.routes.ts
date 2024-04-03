import Express from "express";
const courseRouter = Express.Router();
import { authoriseRole, isAuthenticated } from "../middleware/auth";
import { editCourse, uploadCourse } from "../controllers/course.controller";

courseRouter.post("/create-course", isAuthenticated, authoriseRole("admin"), uploadCourse);
courseRouter.put("/edit-course/:id", isAuthenticated, authoriseRole("admin"), editCourse);


export default courseRouter;