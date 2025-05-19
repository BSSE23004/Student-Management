import { useEffect, useState } from "react";
import { getStudents } from "../utils/storage";

const Stats = () => {
  const [stats, setStats] = useState({
    total: 0,
    courses: 0,
    pending: 0,
    graduated: 0,
  });

  useEffect(() => {
    const students = getStudents();
    const total = students.length;
    const uniqueCourses = new Set(students.map((s) => s.course)).size;
    const pending = students.filter((s) => s.status === "pending").length;
    const graduated = students.filter((s) => s.status === "graduated").length;

    setStats({
      total,
      courses: uniqueCourses,
      pending,
      graduated,
    });
  }, []);

  const statsArray = [
    { label: "Total Students", value: stats.total, color: "bg-blue-500" },
    { label: "Courses", value: stats.courses, color: "bg-green-500" },
    { label: "Pending", value: stats.pending, color: "bg-yellow-500" },
    { label: "Graduated", value: stats.graduated, color: "bg-purple-500" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsArray.map((stat) => (
            <div
              key={stat.label}
              className={`${stat.color} text-white p-6 rounded-lg`}
            >
              <p className="text-sm">{stat.label}</p>
              <p className="text-3xl font-bold">
                {stat.value.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
