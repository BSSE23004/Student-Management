import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gray-800 text-gray-300 py-12">
    <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h4 className="text-white font-bold mb-4">About</h4>
        <p className="text-sm">
          Our Student Management System helps educational institutions
          streamline operations and enhance learning outcomes.
        </p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li>
            <Link to="/students" className="hover:underline">
              Students
            </Link>
          </li>
          <li>
            <Link to="/courses" className="hover:underline">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/reports" className="hover:underline">
              Reports
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Contact</h4>
        <p className="text-sm">Email: ibrahimsattar2006@gmail.com</p>
        <div className="flex space-x-4 mt-4">
          <span className="hover:text-white cursor-pointer">🐦</span>
          <span className="hover:text-white cursor-pointer">📘</span>
        </div>
      </div>
    </div>
    <div className="text-center text-sm mt-8 opacity-75">
      © 2025 Ibrahim Inc. All rights reserved.
    </div>
  </footer>
);

export default Footer;
