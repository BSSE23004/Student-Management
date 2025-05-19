import { useEffect, useState } from "react";
import { getStudents } from "../utils/storage";

const RecentTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const data = getStudents();
    setStudents(data);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-2xl font-semibold mb-4">Recent Enrollments</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-50">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
                {["ID", "Name", "Course", "Email"].map((h) => (
                  <th key={h} className="py-3 px-6">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-6">
                    No students found
                  </td>
                </tr>
              ) : (
                students.map((s) => (
                  <tr
                    key={s.id}
                    className="border-b hover:bg-gray-100 transition"
                  >
                    <td className="py-3 px-6">{s.id}</td>
                    <td className="py-3 px-6">{s.name}</td>
                    <td className="py-3 px-6">{s.course}</td>
                    <td className="py-3 px-6">{s.email}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default RecentTable;
