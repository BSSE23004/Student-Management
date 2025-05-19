import { Link } from "react-router-dom";

const Hero = () => (
  <section className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 flex items-center">
    <div className="container mx-auto px-6 lg:px-20 text-white">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          Welcome to the Ultimate Student Management System
        </h1>
        <p className="text-lg mb-6 opacity-90">
          Manage students, track progress, and generate insights—all in one
          place.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/students"
            className="px-8 py-3 bg-white  text-indigo-600 bg-opacity-20 backdrop-blur rounded-lg font-medium hover:bg-opacity-30 transition"
          >
            View Students
          </Link>
          <Link
            to="/add"
            className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Register New Student
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
