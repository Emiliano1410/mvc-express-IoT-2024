import { Router } from "express";
import {
  getCourses,
  updateCourse,
  createCourse,
  deleteCourse,
} from "../controllers/course";

import validate from "../middlewares/validate";
import { courseSchema } from "../schemas/course";

const router = Router();

router.get("/", getCourses);
router.post("/", validate(courseSchema), createCourse);
router.put("/:id", validate(courseSchema), updateCourse);

router.delete("/:id", deleteCourse);

export default router;
