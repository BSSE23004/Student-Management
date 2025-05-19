import { useNavigate } from "react-router-dom";
import { getStudents, saveStudents } from "../utils/storage";
import StudentForm from "../components/StudentForm";

const AddStudent = () => {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    const newStudent = { ...formData, id: Date.now(), status: "pending" };
    const updatedStudents = [...getStudents(), newStudent];
    saveStudents(updatedStudents);
    navigate("/students");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Add New Student
        </h1>
        <StudentForm
          onSubmit={handleSubmit}
          onCancel={() => navigate("/students")}
          className="space-y-4"
        />
      </div>
    </div>
  );
};

export default AddStudent;
