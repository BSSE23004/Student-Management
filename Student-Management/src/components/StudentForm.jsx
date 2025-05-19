// src/components/StudentForm.jsx
import { useState } from "react";
import { FaUser, FaEnvelope, FaBook } from "react-icons/fa";

const StudentForm = ({ initialData = {}, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    course: initialData.course || "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.course.trim()) newErrors.course = "Course is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const inputBase =
    "peer w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-lg max-w-md mx-auto space-y-6"
      noValidate
    >
      {/* Name Field */}
      <div className="relative">
        <FaUser className="absolute top-3 left-3 text-gray-400" />
        <input
          id="name"
          type="text"
          required
          placeholder=" "
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`${inputBase} pl-10`}
        />
        <label
          htmlFor="name"
          className={`
            absolute left-10 top-3 text-gray-500 text-sm pointer-events-none
            transition-all duration-200 ease-in-out transform origin-left
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
            peer-focus:-translate-y-6 peer-focus:scale-90
            peer-valid:-translate-y-6 peer-valid:scale-90
          `}
        >
          Full Name
        </label>
        {errors.name && (
          <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="relative">
        <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
        <input
          id="email"
          type="email"
          required
          placeholder=" "
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`${inputBase} pl-10`}
        />
        <label
          htmlFor="email"
          className={`
            absolute left-10 top-3 text-gray-500 text-sm pointer-events-none
            transition-all duration-200 ease-in-out transform origin-left
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
            peer-focus:-translate-y-6 peer-focus:scale-90
            peer-valid:-translate-y-6 peer-valid:scale-90
          `}
        >
          Email Address
        </label>
        {errors.email && (
          <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
        )}
      </div>

      {/* Course Field */}
      <div className="relative">
        <FaBook className="absolute top-3 left-3 text-gray-400" />
        <input
          id="course"
          type="text"
          required
          placeholder=" "
          value={formData.course}
          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
          className={`${inputBase} pl-10`}
        />
        <label
          htmlFor="course"
          className={`
            absolute left-10 top-3 text-gray-500 text-sm pointer-events-none
            transition-all duration-200 ease-in-out transform origin-left
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
            peer-focus:-translate-y-6 peer-focus:scale-90
            peer-valid:-translate-y-6 peer-valid:scale-90
          `}
        >
          Course Enrolled
        </label>
        {errors.course && (
          <p className="mt-1 text-red-500 text-sm">{errors.course}</p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Save Student
        </button>
      </div>
    </form>
  );
};

export default StudentForm;
