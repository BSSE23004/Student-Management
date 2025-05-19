import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-5xl font-extrabold text-red-600 mb-6">404</h1>
        <p className="text-lg text-gray-600 mb-8">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
