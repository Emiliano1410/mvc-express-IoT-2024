// Tipo para representar un Alumno
export interface Course {
  id?: number;
  course_name: string;
  credits: number;
  description?: string;
  teacher_id: number;
}

export interface paginatedCourse {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: Course[];
}
