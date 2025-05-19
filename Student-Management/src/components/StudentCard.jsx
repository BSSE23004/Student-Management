import { Link } from "react-router-dom";

const StudentCard = ({ student, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{student.name}</h3>
      <p className="text-gray-600 mb-1">{student.email}</p>
      <p className="text-gray-600 mb-4">{student.course}</p>
      <div className="flex justify-end space-x-2">
        <Link
          to={`/edit/${student.id}`}
          className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(student.id)}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
