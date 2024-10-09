import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#FF3158] p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <h3>Logo</h3>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center justify-center flex-grow">
          <a
            href="/"
            className="text-white hover:text-gray-200 transition duration-300 ease-in-out">
            Home
          </a>
          <a
            href="#course"
            className="text-white hover:text-gray-200 transition duration-300 ease-in-out">
            Course
          </a>
          <a
            href="#faq"
            className="text-white hover:text-gray-200 transition duration-300 ease-in-out">
            FAQ
          </a>
          <a
            href="#testimonial"
            className="text-white hover:text-gray-200 transition duration-300 ease-in-out">
            Testimonial
          </a>
        </div>

        {/* SignIn/Login buttons */}
        <div className="hidden md:flex space-x-4">
          {/* Use Link for navigation */}
          <Link
            to="/signup"
            className="bg-white text-[#FF3158] px-4 py-2 rounded hover:bg-gray-100 transition duration-300 ease-in-out">
            SignIn
          </Link>
          <Link
            to="/login"
            className="bg-gray-200 text-[#FF3158] px-4 py-2 rounded hover:bg-gray-300 transition duration-300 ease-in-out">
            Login
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}>
        <a
          href="/"
          className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">
          Home
        </a>
        <a
          href="#course"
          className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">
          Course
        </a>
        <a
          href="#faq"
          className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">
          FAQ
        </a>
        <a
          href="#testimonial"
          className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">
          Testimonial
        </a>

        {/* Mobile SignIn/Login */}
        <div className="px-4 py-2">
          <Link
            to="/signup"
            className="bg-white text-[#FF3158] w-full py-2 rounded mb-2 hover:bg-gray-100 transition duration-300">
            SignIn
          </Link>
          <Link
            to="/login"
            className="bg-gray-200 text-[#FF3158] w-full py-2 rounded hover:bg-gray-300 transition duration-300">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
