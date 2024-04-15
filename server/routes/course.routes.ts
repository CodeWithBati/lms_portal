import Express from "express";
const courseRouter = Express.Router();
import { authoriseRole, isAuthenticated } from "../middleware/auth";
import { editCourse, getAllCourses, getCourseContent, getSingleCourse, uploadCourse } from "../controllers/course.controller";

courseRouter.post("/create-course", isAuthenticated, authoriseRole("admin"), uploadCourse);
courseRouter.put("/edit-course/:id", isAuthenticated, authoriseRole("admin"), editCourse);
courseRouter.get("/get-single-course/:id", getSingleCourse)
courseRouter.get("/get-all-course", getAllCourses)
courseRouter.get("/get-course-content/:id", isAuthenticated, getCourseContent)


export default courseRouter;