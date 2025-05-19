import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStudents, deleteStudent } from "../utils/storage";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(getStudents());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      deleteStudent(id);
      setStudents(getStudents());
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Student Directory
          </h1>
          <Link
            to="/add"
            className="px-6 py-2 bg-green-500 text-white font-medium rounded-full shadow hover:bg-green-600 transition"
          >
            + Add Student
          </Link>
        </div>

        {students.length === 0 ? (
          <p className="text-center text-gray-600 mt-20">
            No students found. Click "Add Student" to get started.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {students.map((student) => (
              <div
                key={student.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {student.name}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Course:{" "}
                    <span className="font-medium">{student.course}</span>
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Email: <span className="font-medium">{student.email}</span>
                  </p>
                  <div className="flex justify-end space-x-4">
                    <Link
                      to={`/edit/${student.id}`}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEdit size={18} />
                    </Link>
                    <button
                      onClick={() => handleDelete(student.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrashAlt size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentList;
