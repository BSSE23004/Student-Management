export const saveStudents = (students) => {
  localStorage.setItem("students", JSON.stringify(students));
};

export const getStudents = () => {
  const data = localStorage.getItem("students");
  return data ? JSON.parse(data) : [];
};

export const getStudentById = (id) => {
  const students = getStudents();
  return students.find((student) => student.id === id);
};

export const deleteStudent = (id) => {
  const students = getStudents().filter((student) => student.id !== id);
  saveStudents(students);
};
