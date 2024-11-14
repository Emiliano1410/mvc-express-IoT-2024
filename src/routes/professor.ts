import { Router } from "express";
import {
  getProfessors,
  updateProfessor,
  createProfessor,
  deleteProfessor,
} from "../controllers/professor";

import validate from "../middlewares/validate";
import { professorSchema } from "../schemas/professor";

const router = Router();

router.get("/", getProfessors);
router.post("/", validate(professorSchema), createProfessor);
router.put("/:id", validate(professorSchema), updateProfessor);
router.delete("/:id", deleteProfessor);

export default router;
