import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getStudentById, getStudents, saveStudents } from "../utils/storage";
import StudentForm from "../components/StudentForm";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const existingStudent = getStudentById(Number(id));
    if (!existingStudent) {
      navigate("/404");
    } else {
      setStudent(existingStudent);
    }
  }, [id, navigate]);

  const handleSubmit = (updatedData) => {
    const students = getStudents().map((s) =>
      s.id === Number(id) ? { ...s, ...updatedData } : s
    );
    saveStudents(students);
    navigate("/students");
  };

  if (!student) return null;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Edit Student</h1>
      <StudentForm
        initialData={student}
        onSubmit={handleSubmit}
        onCancel={() => navigate("/students")}
      />
    </div>
  );
};

export default EditStudent;
