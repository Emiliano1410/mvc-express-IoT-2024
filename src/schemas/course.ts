import { z } from "zod";

export const courseSchema = z.object({
  course_name: z.string().min(2, {
    message: "El nombre del curso debe tener al menos 2 caracteres",
  }),
  credits: z
    .number()
    .int({ message: "Los créditos deben ser un número entero" }),
  description: z
    .string()
    .min(2, { message: "La descripcion debe tener al menos 2 caracteres" })
    .optional(),
  teacher_id: z
    .number()
    .int({ message: "el id del profesor debe ser un número entero" }),
});
