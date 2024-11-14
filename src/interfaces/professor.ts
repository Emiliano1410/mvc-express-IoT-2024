// Tipo para representar un Alumno
export interface Professor {
  id?: number;
  first_name: string;
  last_name: string;
  department: string;
  email: string;
  phone?: string;
}

export interface paginatedProfessor {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: Professor[];
}
