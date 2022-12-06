export interface Admin {
  id: number;
  name: string;
  email: string;
}

export interface GetAllAdminsOutput {
  getAllAdmins: Admin[];
}

export interface Student {
  id: number;
  name: string;
  email: string;
  faculty: number;
  career: number;
}

export interface GetAllStudentsOutput {
  getAllStudents: Student[];
}

export interface Teacher {
  id: number;
  name: string;
  email: string;
  faculty: number;
}

export interface GetAllTeachersOutput {
  getAllTeachers: Teacher[];
}

export type User = Admin | Student | Teacher;
