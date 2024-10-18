// routes/usuarios.ts
import { Router } from "express";
import {
  createStudent,
  deleteStudent,
  getStudents,
  updateStudent,
} from "../controllers/student";

const router = Router();

// Regresa todos los alumnos en la base de datos
router.get("/", getStudents);

router.post("/", createStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

export default router;
