import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#3f5870] text-white p-4 shadow-2xl">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text text-xl font-bold">
          NitEstate
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg">
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/properties" className="hover:text-gray-300">
              Properties
            </Link>
          </li>
        </ul>

        {/* Avatar Icon */}
        <div className="hidden md:block text-2xl">
          <FaUserAlt />
        </div>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="md:hidden mt-2 flex flex-col bg-[#3f5870] p-4 rounded-lg">
          <Link
            to="/about"
            className="py-2 hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/properties"
            className="py-2 hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Properties
          </Link>
          <div className="py-2 text-2xl">
            <FaUserAlt />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
