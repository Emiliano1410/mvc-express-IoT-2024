import { findAllStudents } from "../models/student";

// Obtener todos los alumnos
export const findAll = async () => {
  return await findAllStudents();
};

export const insert = async (student: Student) => {
  return await insertStudent(student);
};
